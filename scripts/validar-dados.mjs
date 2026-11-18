/* Confere data/servicos.json, data/nordeste.json e js/dados.js.
 * Erros (dado duplicado, valor fora do padrão, dados.js desatualizado) encerram com código 1.
 * Avisos apontam informação incompleta que a pesquisa ainda precisa completar.
 * Uso: npm run validar   (ou: npm run validar -- --sem-avisos) */

import { readFileSync } from 'node:fs';
import { caminhos, gerarDadosJs, lerDados, montarServicos, normalizar } from './dados-lib.mjs';

const VALORES = {
  categoria: ['habilitacao', 'identificacao_civil', 'documentacao_civil', 'educacao', 'cidadania', 'trabalho', 'assistencia_social'],
  abrangencia: ['nacional', 'estadual'],
  status_conteudo: ['confirmado', 'parcial'],
  apto_catalogo: ['sim', 'com_ressalvas', 'nao'],
  custo: ['gratuito', 'pago', 'variavel', 'pendente'],
  prazo: ['confirmado', 'com_ressalva', 'pendente'],
  documentos_status: ['confirmado', 'nao_se_aplica', 'pendente'],
  tipo_evidencia: ['pagina_lida', 'trecho_indexado', 'documento_lido'],
  utilidade: ['alta', 'media', 'baixa'],
  autenticacao: [true, false, null]
};
const CAMPOS_OBRIGATORIOS = ['id', 'nome', 'categoria', 'abrangencia', 'localidade', 'orgao_responsavel', 'descricao',
  'publico', 'documentos_obrigatorios', 'documentos_status', 'documentos_condicionais', 'passo_a_passo', 'canais',
  'custo', 'prazo', 'fontes', 'data_consulta', 'status_conteudo', 'pendencias', 'apto_catalogo'];
/* Canais que podem não ter link (atendimento presencial, app de loja, órgão genérico). */
const CANAIS_SEM_URL = ['presencial', 'aplicativo_oficial', 'orgao', 'telefone'];

const erros = [];
const avisos = [];
const erro = (onde, msg) => erros.push(`${onde}: ${msg}`);
const aviso = (onde, msg) => avisos.push(`${onde}: ${msg}`);

function repetidos(lista) {
  const vistos = new Map();
  for (const item of lista) vistos.set(item, (vistos.get(item) || 0) + 1);
  return [...vistos].filter(([, n]) => n > 1).map(([item]) => item);
}

/* Junta os ids de fonte citados em qualquer campo da ficha (exceto a própria lista de fontes). */
function fontesCitadas(valor, acc = new Set()) {
  if (Array.isArray(valor)) valor.forEach((v) => fontesCitadas(v, acc));
  else if (valor && typeof valor === 'object') {
    for (const [chave, v] of Object.entries(valor)) {
      if (chave === 'fontes' && Array.isArray(v) && v.every((x) => typeof x === 'string')) v.forEach((id) => acc.add(id));
      else fontesCitadas(v, acc);
    }
  }
  return acc;
}

const { pesquisa, nordeste } = lerDados();
const bases = pesquisa.servicos_base || [];
const fichas = [...pesquisa.servicos_nacionais, ...pesquisa.variacoes_estaduais];

/* ---------- Visão geral ---------- */
if (pesquisa.total_servicos !== fichas.length) {
  erro('servicos.json', `total_servicos = ${pesquisa.total_servicos}, mas há ${fichas.length} fichas`);
}
for (const id of repetidos([...fichas, ...bases].map((s) => s.id))) erro(id, 'id repetido');

const porNomeUf = new Map();
for (const s of fichas) {
  const chave = `${normalizar(s.nome)}|${s.localidade?.uf ?? 'nacional'}`;
  if (porNomeUf.has(chave)) erro(s.id, `mesmo nome e local de ${porNomeUf.get(chave)}`);
  porNomeUf.set(chave, s.id);
}

/* ---------- Serviços base ---------- */
for (const base of bases) {
  const onde = `base ${base.id}`;
  if (!VALORES.categoria.includes(base.categoria)) erro(onde, `categoria "${base.categoria}" desconhecida`);
  if (!base.nome || !base.descricao) erro(onde, 'sem nome ou descrição');
  for (const p of repetidos((base.nomes_populares || []).map(normalizar))) erro(onde, `nome popular repetido "${p}"`);
  const variacoes = pesquisa.variacoes_estaduais.filter((s) => s.servico_base === base.id);
  if (!variacoes.length) aviso(onde, 'nenhuma variação estadual aponta para este serviço');
  for (const uf of repetidos(variacoes.map((s) => s.localidade?.uf))) erro(onde, `duas variações para ${uf}`);
  const faltam = (pesquisa.cobertura_ufs || []).filter((uf) => !variacoes.some((s) => s.localidade?.uf === uf));
  if (faltam.length) aviso(onde, `sem ficha para ${faltam.join(', ')}`);
}

/* ---------- Fichas ---------- */
for (const s of fichas) {
  const onde = s.id;
  for (const campo of CAMPOS_OBRIGATORIOS) {
    if (!(campo in s)) erro(onde, `campo "${campo}" ausente`);
  }
  for (const campo of ['categoria', 'abrangencia', 'status_conteudo', 'apto_catalogo', 'documentos_status']) {
    if (campo in s && !VALORES[campo].includes(s[campo])) erro(onde, `${campo} "${s[campo]}" fora do padrão (${VALORES[campo].join(' | ')})`);
  }
  if (s.custo && !VALORES.custo.includes(s.custo.status)) erro(onde, `custo.status "${s.custo.status}" fora do padrão (${VALORES.custo.join(' | ')})`);
  if (s.prazo && !VALORES.prazo.includes(s.prazo.status)) erro(onde, `prazo.status "${s.prazo.status}" fora do padrão (${VALORES.prazo.join(' | ')})`);

  /* Local */
  const uf = s.localidade?.uf;
  if (s.abrangencia === 'estadual' && !uf) erro(onde, 'estadual sem UF');
  if (s.abrangencia === 'nacional' && uf) erro(onde, 'nacional com UF');
  if (uf && !(pesquisa.cobertura_ufs || []).includes(uf)) erro(onde, `UF ${uf} fora de cobertura_ufs`);

  /* Variação estadual x serviço base */
  if (pesquisa.variacoes_estaduais.includes(s)) {
    const base = bases.find((b) => b.id === s.servico_base);
    if (!base) erro(onde, `servico_base "${s.servico_base}" não existe`);
    else if (base.categoria !== s.categoria) erro(onde, `categoria "${s.categoria}" diferente do serviço base (${base.categoria})`);
  }

  /* Repetições dentro da ficha */
  for (const campo of ['nomes_populares', 'condicoes_acesso', 'observacoes', 'pendencias']) {
    for (const r of repetidos((s[campo] || []).map(normalizar))) erro(onde, `${campo} repetido: "${r}"`);
  }
  const documentos = [...(s.documentos_obrigatorios || []), ...(s.documentos_condicionais || [])];
  for (const r of repetidos((s.documentos_obrigatorios || []).map((d) => normalizar(d.documento)))) erro(onde, `documento obrigatório repetido: "${r}"`);
  for (const r of repetidos((s.documentos_condicionais || []).map((d) => normalizar(`${d.documento}|${d.quando}`)))) erro(onde, `documento condicional repetido: "${r}"`);
  for (const r of repetidos((s.passo_a_passo || []).map((p) => normalizar(p.acao)))) erro(onde, `passo repetido: "${r}"`);
  const ordens = (s.passo_a_passo || []).map((p) => p.ordem);
  if (ordens.some((o, i) => o !== i + 1)) erro(onde, `ordem dos passos fora de sequência (${ordens.join(', ')})`);
  if (documentos.some((d) => !normalizar(d.documento))) erro(onde, 'documento sem nome');

  /* Documentos */
  const temLista = (s.documentos_obrigatorios || []).length > 0;
  if (s.documentos_status === 'confirmado' && !temLista) erro(onde, 'documentos_status "confirmado" com lista vazia');
  if (s.documentos_status !== 'confirmado' && temLista) erro(onde, `documentos_status "${s.documentos_status}" mas há documentos na lista`);
  if (s.documentos_status === 'pendente') aviso(onde, 'lista de documentos obrigatórios não confirmada');

  /* Custo e prazo */
  const custo = s.custo || {};
  if (custo.status === 'gratuito' && custo.valor_brl !== 0) erro(onde, 'custo gratuito deve ter valor_brl 0');
  if (custo.status === 'pago' && custo.valor_brl === null) aviso(onde, 'serviço pago sem valor confirmado');
  if (custo.status === 'pendente') aviso(onde, 'não confirmado se há cobrança');
  if (s.prazo?.status === 'pendente') aviso(onde, 'prazo não confirmado');
  if (!normalizar(custo.descricao)) erro(onde, 'custo sem descrição');
  if (!normalizar(s.prazo?.descricao)) erro(onde, 'prazo sem descrição');

  /* Coerência do status da ficha */
  if (s.status_conteudo === 'confirmado') {
    if (s.documentos_status === 'pendente') erro(onde, 'ficha "confirmado" com documentos pendentes');
    if (custo.status === 'pendente') erro(onde, 'ficha "confirmado" com custo pendente');
    if ((s.pendencias || []).length) aviso(onde, `ficha "confirmado" com ${s.pendencias.length} pendência(s)`);
    if (s.apto_catalogo !== 'sim') erro(onde, 'ficha "confirmado" deveria ter apto_catalogo "sim"');
  }
  if (s.status_conteudo === 'parcial' && !(s.pendencias || []).length) erro(onde, 'ficha "parcial" sem pendências explicando o motivo');

  /* Canais */
  if (!(s.canais || []).some((c) => c.url)) erro(onde, 'nenhum canal com link');
  (s.canais || []).forEach((c, i) => {
    if (!c.url && !CANAIS_SEM_URL.includes(c.tipo)) aviso(onde, `canal ${i + 1} (${c.tipo}) sem link`);
  });
  for (const r of repetidos((s.canais || []).map((c) => c.url).filter(Boolean))) erro(onde, `canal com link repetido: ${r}`);

  /* Fontes */
  const fontes = s.fontes || [];
  if (!fontes.length) erro(onde, 'sem fontes');
  for (const id of repetidos(fontes.map((f) => f.id))) erro(onde, `fonte com id repetido: ${id}`);
  for (const url of repetidos(fontes.map((f) => f.url))) erro(onde, `fonte com URL repetida: ${url}`);
  const definidas = new Set(fontes.map((f) => f.id));
  const citadas = fontesCitadas({ ...s, fontes: undefined });
  for (const id of citadas) if (!definidas.has(id)) erro(onde, `cita a fonte "${id}", que não está em fontes`);
  for (const f of fontes) {
    for (const campo of ['url', 'titulo', 'orgao', 'data_consulta']) if (!f[campo]) erro(onde, `fonte ${f.id} sem ${campo}`);
    if (!VALORES.tipo_evidencia.includes(f.tipo_evidencia)) erro(onde, `fonte ${f.id}: tipo_evidencia "${f.tipo_evidencia}" fora do padrão`);
    if (!citadas.has(f.id) && !(f.sustenta || []).length) aviso(onde, `fonte ${f.id} não é citada nem diz o que sustenta`);
  }
}

/* A mesma página deve ter o mesmo título em todas as fichas. */
const titulosPorUrl = new Map();
for (const s of fichas) {
  for (const f of s.fontes || []) {
    const lista = titulosPorUrl.get(f.url) || [];
    lista.push({ ficha: s.id, titulo: f.titulo });
    titulosPorUrl.set(f.url, lista);
  }
}
for (const [url, lista] of titulosPorUrl) {
  if (new Set(lista.map((x) => normalizar(x.titulo))).size > 1) {
    aviso('fontes', `${url} tem títulos diferentes em ${lista.map((x) => x.ficha).join(', ')}`);
  }
}

/* ---------- Nordeste ---------- */
const siglas = nordeste.estados.map((e) => e.sigla);
for (const sigla of repetidos(siglas)) erro(`nordeste ${sigla}`, 'estado repetido');
const urlsNordeste = [];
for (const e of nordeste.estados) {
  const onde = `nordeste ${e.sigla}`;
  if (!(e.portais_servicos || []).length) erro(onde, 'sem portal de serviços');
  if (!(e.apis || []).length) aviso(onde, 'nenhuma API ou base de dados abertos listada');
  for (const p of e.portais_servicos || []) {
    if (!VALORES.utilidade.includes(p.utilidade)) erro(onde, `utilidade "${p.utilidade}" fora do padrão`);
    urlsNordeste.push(p.url.replace(/\/$/, ''));
  }
  for (const api of e.apis || []) {
    if ('requer_token' in api) erro(onde, `${api.nome}: use "autenticacao" no lugar de "requer_token"`);
    if (!VALORES.autenticacao.includes(api.autenticacao)) erro(onde, `${api.nome}: autenticacao deve ser true, false ou null`);
    if (api.autenticacao === null) aviso(onde, `${api.nome}: não confirmado se exige login/token`);
    if (!VALORES.utilidade.includes(api.utilidade)) erro(onde, `${api.nome}: utilidade "${api.utilidade}" fora do padrão`);
    urlsNordeste.push(api.url.replace(/\/$/, ''));
  }
}
for (const url of repetidos(urlsNordeste)) erro('nordeste', `URL repetida: ${url}`);

/* ---------- js/dados.js em dia com o JSON ---------- */
const dadosJsAtual = readFileSync(caminhos.dadosJs, 'utf8');
if (dadosJsAtual !== gerarDadosJs({ pesquisa, nordeste })) {
  erro('js/dados.js', 'desatualizado em relação a data/*.json — rode `npm run dados`');
}

/* ---------- Relatório ---------- */
const semAvisos = process.argv.includes('--sem-avisos');
const total = montarServicos(pesquisa).length;
const contar = (filtro) => fichas.filter(filtro).length;
console.log(`Serviço Fácil — validação dos dados (${total} fichas, ${bases.length} serviços base, ${siglas.length} estados do Nordeste)\n`);
console.log(`  Fichas confirmadas:            ${contar((s) => s.status_conteudo === 'confirmado')} de ${total}`);
console.log(`  Documentos não confirmados:    ${contar((s) => s.documentos_status === 'pendente')}`);
console.log(`  Pago sem valor confirmado:     ${contar((s) => s.custo?.status === 'pago' && s.custo.valor_brl === null)}`);
console.log(`  Cobrança não confirmada:       ${contar((s) => s.custo?.status === 'pendente')}`);
console.log(`  Prazo não confirmado:          ${contar((s) => s.prazo?.status === 'pendente')}\n`);

if (!semAvisos && avisos.length) {
  console.log(`AVISOS (${avisos.length}) — informação incompleta:`);
  avisos.forEach((a) => console.log(`  - ${a}`));
  console.log('');
}
if (erros.length) {
  console.log(`ERROS (${erros.length}):`);
  erros.forEach((e) => console.log(`  ✗ ${e}`));
  process.exit(1);
}
console.log(`✓ Nenhum erro. ${avisos.length} aviso(s).`);
