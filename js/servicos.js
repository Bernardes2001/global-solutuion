/* Serviço Fácil — página Serviços (funcionalidade principal).
 * Lê os arrays `servicos` e `servicosBase` (js/dados.js), filtra pela busca e pelos filtros,
 * mostra os cards pelo DOM e abre os detalhes com o checklist de documentos.
 * Serviços com regras por estado (CIN, CNH) aparecem em um card só até o usuário escolher o estado. */

const campoBusca = document.querySelector('#busca');
const filtroCategoria = document.querySelector('#categoria');
const filtroEstado = document.querySelector('#estado');
const grade = document.querySelector('#gradeServicos');
const estadoVazio = document.querySelector('#estadoVazio');
const contagem = document.querySelector('#contagemResultados');
const dialogo = document.querySelector('#dialogoServico');
const conteudoDialogo = document.querySelector('#conteudoDialogo');

/* Documentos marcados pelo usuário, por serviço: { idDoServico: Set de índices }.
 * Ficam salvos no navegador (localStorage) para o checklist não se perder ao fechar a página. */
const CHAVE_DOCUMENTOS = 'sf-documentos';

function carregarMarcados() {
  const resultado = {};
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_DOCUMENTOS) || '{}');
    Object.entries(salvo).forEach(([id, lista]) => {
      if (Array.isArray(lista)) resultado[id] = new Set(lista.filter(Number.isInteger));
    });
  } catch (erro) {
    /* Sem armazenamento ou dado inválido: começa vazio. */
  }
  return resultado;
}

function salvarMarcados() {
  try {
    const salvo = {};
    Object.entries(documentosMarcados).forEach(([id, marcados]) => {
      if (marcados.size) salvo[id] = [...marcados];
    });
    localStorage.setItem(CHAVE_DOCUMENTOS, JSON.stringify(salvo));
  } catch (erro) {
    /* Sem armazenamento: o checklist vale só enquanto a página estiver aberta. */
  }
}

const documentosMarcados = carregarMarcados();
let botaoQueAbriu = null;
let servicoAberto = null;
const sintese = 'speechSynthesis' in window ? window.speechSynthesis : null;
const temLinkPublico = /^https?:$/.test(window.location.protocol);

/* Quantos documentos obrigatórios o usuário já marcou neste serviço (para o selo do card). */
function progressoDocumentos(servico) {
  const total = comoLista(servico.documentos_obrigatorios).length;
  const feitos = total ? (documentosMarcados[servico.id] || new Set()).size : 0;
  return { total, feitos };
}

function ufDe(ficha) {
  return (ficha.localidade && ficha.localidade.uf) || null;
}

/* Fichas estaduais de um serviço base, em ordem alfabética do estado. */
function fichasDoServico(idBase) {
  return servicos
    .filter((ficha) => ficha.servico_base === idBase)
    .sort((a, b) => (nomesUf[ufDe(a)] || '').localeCompare(nomesUf[ufDe(b)] || '', 'pt-BR'));
}

function textoDeBusca(item) {
  const partes = [item.nome, ...comoLista(item.nomes_populares), item.descricao, nomeCategoria(item.categoria)];
  if (item.ehServicoBase) {
    fichasDoServico(item.id).forEach((ficha) => partes.push(ficha.nome, ficha.orgao_responsavel));
  } else {
    partes.push(item.orgao_responsavel, ufDe(item));
  }
  return normalizar(partes.join(' '));
}

function rotuloStatus(servico) {
  return servico.status_conteudo === 'confirmado' ? 'Informações confirmadas' : 'Informações parciais';
}

function classeStatus(servico) {
  return servico.status_conteudo === 'confirmado'
    ? 'bg-sucesso-fundo text-sucesso'
    : 'bg-aviso-fundo text-aviso';
}

function preencherFiltros() {
  const categorias = [...new Set(servicos.map((s) => s.categoria).filter(Boolean))]
    .sort((a, b) => nomeCategoria(a).localeCompare(nomeCategoria(b), 'pt-BR'));
  categorias.forEach((chave) => filtroCategoria.add(new Option(nomeCategoria(chave), chave)));

  const ufsComFichas = servicos
    .map((s) => s.localidade && s.localidade.uf)
    .filter(Boolean);
  const ufsComPortais = comoLista(portaisEstaduais)
    .map((estado) => estado.sigla)
    .filter(Boolean);
  const ufs = [...new Set([...ufsComFichas, ...ufsComPortais])]
    .sort((a, b) => (nomesUf[a] || a).localeCompare(nomesUf[b] || b, 'pt-BR'));
  ufs.forEach((uf) => filtroEstado.add(new Option(`${nomesUf[uf] || uf} (${uf})`, uf)));
}

/* Sem estado escolhido: nacionais + um card por serviço base.
 * Com estado escolhido: nacionais + as fichas daquele estado. */
function itensDoCatalogo(estado) {
  const nacionais = servicos.filter((ficha) => !ufDe(ficha));
  if (estado) return [...nacionais, ...servicos.filter((ficha) => ufDe(ficha) === estado)];
  const bases = comoLista(servicosBase).map((base) => ({ ...base, ehServicoBase: true }));
  return [...nacionais, ...bases];
}

function filtrar() {
  const termo = normalizar(campoBusca.value.trim());
  const categoria = filtroCategoria.value;

  const resultado = itensDoCatalogo(filtroEstado.value).filter((item) => {
    const casaTexto = !termo || textoDeBusca(item).includes(termo);
    const casaCategoria = !categoria || item.categoria === categoria;
    return casaTexto && casaCategoria;
  });
  if (!termo) return resultado;

  /* Quem tem o termo no nome ou no apelido popular vem antes de quem só cita o termo na descrição. */
  const pontos = (item) => {
    if (normalizar(item.nome).includes(termo)) return 0;
    if (comoLista(item.nomes_populares).some((apelido) => normalizar(apelido).includes(termo))) return 1;
    return 2;
  };
  return resultado.sort((a, b) => pontos(a) - pontos(b));
}

function criarCardServicoBase(base) {
  const ufs = fichasDoServico(base.id).map(ufDe);
  return `
    <li class="card flex h-full flex-col gap-2.5 p-5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex flex-wrap gap-2">
        <span class="chip bg-ceu text-azul">${escaparHtml(nomeCategoria(base.categoria))}</span>
        <span class="chip bg-aviso-fundo text-aviso">Regras por estado</span>
      </div>
      <h3 class="text-lg font-bold leading-snug">${escaparHtml(base.nome)}</h3>
      <p class="text-sm font-semibold text-suave">${ufs.length} estados: ${escaparHtml(ufs.join(', '))}</p>
      <p class="line-clamp-3 flex-1 leading-relaxed text-suave">${escaparHtml(base.descricao || 'Descrição não informada.')}</p>
      <button type="button" class="btn-primario mt-2 w-full" data-base="${escaparHtml(base.id)}">
        Escolher meu estado<span class="sr-only">: ${escaparHtml(base.nome)}</span>
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    </li>`;
}

function criarCard(servico) {
  if (servico.ehServicoBase) return criarCardServicoBase(servico);
  const { total, feitos } = progressoDocumentos(servico);
  const seloProgresso = feitos
    ? `<span class="chip bg-sucesso-fundo text-sucesso">${feitos} de ${total} documentos separados</span>`
    : '';
  return `
    <li class="card flex h-full flex-col gap-2.5 p-5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex flex-wrap gap-2">
        <span class="chip bg-ceu text-azul">${escaparHtml(nomeCategoria(servico.categoria))}</span>
        <span class="chip ${classeStatus(servico)}">${escaparHtml(rotuloStatus(servico))}</span>
        ${seloProgresso}
      </div>
      <h3 class="text-lg font-bold leading-snug">${escaparHtml(servico.nome)}</h3>
      <p class="text-sm font-semibold text-suave">${escaparHtml(nomeLocal(servico))} · ${escaparHtml(servico.orgao_responsavel || 'Órgão não informado')}</p>
      <p class="line-clamp-3 flex-1 leading-relaxed text-suave">${escaparHtml(servico.descricao || 'Descrição não informada.')}</p>
      <button type="button" class="btn-primario mt-2 w-full" data-servico="${escaparHtml(servico.id)}">
        Ver o que levar<span class="sr-only">: ${escaparHtml(servico.nome)}</span>
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    </li>`;
}

function mostrarServicos() {
  const resultado = filtrar();
  const plural = resultado.length === 1 ? 'serviço encontrado' : 'serviços encontrados';
  const total = itensDoCatalogo(filtroEstado.value).length;
  contagem.textContent = `${resultado.length} ${plural} de ${total}`;
  grade.innerHTML = resultado.map(criarCard).join('');
  grade.hidden = resultado.length === 0;
  estadoVazio.hidden = resultado.length !== 0;
}

/* ---------- Detalhes do serviço ---------- */

function secao(titulo, itens, desenharItem) {
  if (!comoLista(itens).length) {
    return `<section class="mt-6"><h3 class="text-lg font-extrabold">${titulo}</h3><p class="mt-2 text-suave">Não informado na pesquisa.</p></section>`;
  }
  return `<section class="mt-6"><h3 class="text-lg font-extrabold">${titulo}</h3><ul class="mt-3 flex flex-col gap-3">${itens.map(desenharItem).join('')}</ul></section>`;
}

function htmlChecklist(servico) {
  const documentos = comoLista(servico.documentos_obrigatorios);
  if (!documentos.length) {
    const mensagem = servico.documentos_status === 'nao_se_aplica'
      ? '<p class="mt-2 text-suave">Não há documento obrigatório para apresentar: o pedido é feito com seus dados ou com a conta gov.br. Veja abaixo os documentos pedidos só em situações específicas.</p>'
      : '<p class="mt-2 rounded-xl bg-aviso-fundo p-3.5 text-aviso">A lista de documentos ainda não foi confirmada pela pesquisa. Confira no canal oficial antes de ir.</p>';
    return `<section class="mt-6"><h3 class="text-lg font-extrabold">Checklist de documentos</h3>${mensagem}</section>`;
  }
  const marcados = documentosMarcados[servico.id] || new Set();
  const itens = documentos.map((item, indice) => {
    const nome = item.documento || item;
    return `
      <li>
        <label class="flex cursor-pointer items-start gap-3 rounded-xl border border-linha p-3.5 hover:bg-ceu">
          <input type="checkbox" class="mt-0.5 h-5.5 w-5.5 shrink-0 accent-sucesso-barra" data-documento="${indice}" ${marcados.has(indice) ? 'checked' : ''}>
          <span class="flex flex-col gap-0.5">
            <span class="font-semibold">${escaparHtml(nome)}</span>
            ${item.observacao ? `<span class="text-sm text-suave">${escaparHtml(item.observacao)}</span>` : ''}
          </span>
        </label>
      </li>`;
  }).join('');

  return `
    <section class="mt-6" aria-labelledby="tituloChecklist">
      <div class="flex flex-wrap items-baseline justify-between gap-2">
        <h3 id="tituloChecklist" class="text-lg font-extrabold">Checklist: o que você já tem?</h3>
        <p id="statusChecklist" class="text-sm font-bold" role="status" tabindex="-1"></p>
      </div>
      ${marcados.size ? '<button type="button" class="no-print mt-2 text-sm font-semibold text-azul underline" data-acao="limpar-checklist">Limpar marcações</button>' : ''}
      <progress id="barraChecklist" class="barra-checklist mt-3 h-2 w-full" max="${documentos.length}" value="0"></progress>
      <ul class="mt-4 flex flex-col gap-2.5">${itens}</ul>
    </section>`;
}

function atualizarChecklist(servico) {
  const total = comoLista(servico.documentos_obrigatorios).length;
  const status = conteudoDialogo.querySelector('#statusChecklist');
  const barra = conteudoDialogo.querySelector('#barraChecklist');
  if (!total || !status || !barra) return;

  const feitos = (documentosMarcados[servico.id] || new Set()).size;
  const faltam = total - feitos;
  barra.value = feitos;
  status.textContent = faltam === 0
    ? 'Tudo pronto! Você tem todos os documentos obrigatórios.'
    : `Faltam ${faltam} de ${total} documento${total === 1 ? '' : 's'}`;
  status.classList.toggle('text-sucesso', faltam === 0);
  status.classList.toggle('text-aviso', faltam !== 0);
}

/* Avisos curtos quando custo ou prazo não estão confirmados. */
function alertaCusto(custo) {
  if (!custo) return '';
  if (custo.status === 'pago' && custo.valor_brl === null) return 'Valor ainda não confirmado pela pesquisa.';
  if (custo.status === 'pendente') return 'Não confirmamos se há cobrança.';
  return '';
}

function alertaPrazo(prazo) {
  if (!prazo) return '';
  if (prazo.status === 'pendente') return 'Prazo não confirmado pela pesquisa.';
  if (prazo.status === 'com_ressalva') return 'Prazo com ressalvas: leia com atenção.';
  return '';
}

function caixaInfo(titulo, texto, alerta) {
  return `
    <div class="rounded-xl bg-fundo p-4">
      <p class="text-xs font-bold uppercase text-suave">${titulo}</p>
      <p class="mt-1 font-semibold">${escaparHtml(texto || 'Não informado na pesquisa.')}</p>
      ${alerta ? `<p class="mt-1 text-sm font-semibold text-aviso">${escaparHtml(alerta)}</p>` : ''}
    </div>`;
}

/* Abre (ou troca) o conteúdo do diálogo e devolve o foco ao botão de fechar. */
function mostrarNoDialogo(html) {
  conteudoDialogo.innerHTML = html;
  if (!dialogo.open) dialogo.showModal();
  dialogo.scrollTop = 0;
  conteudoDialogo.querySelector('#fecharDialogo').addEventListener('click', () => dialogo.close());
  conteudoDialogo.querySelector('#fecharDialogo').focus();
}

function cabecalhoDialogo(eyebrow, titulo, subtitulo) {
  return `
    <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-linha bg-superficie px-5 py-5 sm:px-8">
      <div>
        <p class="eyebrow">${escaparHtml(eyebrow)}</p>
        <h2 id="tituloDialogo" class="mt-1 text-2xl font-extrabold leading-tight">${escaparHtml(titulo)}</h2>
        <p class="mt-1.5 text-sm text-suave">${escaparHtml(subtitulo)}</p>
      </div>
      <button type="button" id="fecharDialogo" class="btn-acess text-xl" aria-label="Fechar detalhes">×</button>
    </div>`;
}

/* Serviço com regras por estado: primeiro o usuário escolhe o estado. */
function abrirServicoBase(id, botao) {
  const base = comoLista(servicosBase).find((item) => item.id === id);
  if (!base) return;
  if (botao) botaoQueAbriu = botao;
  servicoAberto = null;

  const opcoes = fichasDoServico(base.id).map((ficha) => `
    <li>
      <button type="button" class="flex w-full items-center justify-between gap-3 rounded-xl border border-linha p-3.5 text-left hover:bg-ceu" data-ficha="${escaparHtml(ficha.id)}">
        <span class="flex flex-col gap-0.5">
          <span class="font-semibold">${escaparHtml(nomeLocal(ficha))}</span>
          <span class="text-sm text-suave">${escaparHtml(ficha.orgao_responsavel || 'Órgão não informado')}</span>
        </span>
        <span class="chip shrink-0 ${classeStatus(ficha)}">${escaparHtml(rotuloStatus(ficha))}</span>
      </button>
    </li>`).join('');

  mostrarNoDialogo(`
    ${cabecalhoDialogo(nomeCategoria(base.categoria), base.nome, 'As regras mudam conforme o estado')}
    <div class="px-5 py-6 sm:px-8">
      <p class="leading-relaxed">${escaparHtml(base.descricao || '')}</p>
      <section class="mt-6">
        <h3 class="text-lg font-extrabold">Em qual estado você vai fazer o pedido?</h3>
        <ul class="mt-3 flex flex-col gap-2.5">${opcoes}</ul>
      </section>
    </div>`);
}

/* Nas fichas estaduais, permite trocar de estado sem fechar o diálogo. */
function htmlTrocarEstado(servico) {
  if (!servico.servico_base) return '';
  const opcoes = fichasDoServico(servico.servico_base)
    .map((ficha) => `<option value="${escaparHtml(ficha.id)}" ${ficha.id === servico.id ? 'selected' : ''}>${escaparHtml(nomeLocal(ficha))}</option>`)
    .join('');
  return `
    <div class="mb-6 flex flex-col gap-1.5">
      <label for="trocarEstado" class="rotulo">Ver as regras de outro estado</label>
      <select id="trocarEstado" class="campo">${opcoes}</select>
    </div>`;
}

function abrirServico(id, botao) {
  const servico = servicos.find((item) => item.id === id);
  if (!servico) return;
  if (botao) botaoQueAbriu = botao;

  const canais = comoLista(servico.canais);
  const canalPrincipal = canais.find((canal) => canal.url);

  const html = `
    ${cabecalhoDialogo(nomeCategoria(servico.categoria), servico.nome, `${nomeLocal(servico)} · ${servico.orgao_responsavel || 'Órgão não informado'}`)}

    <div class="px-5 py-6 sm:px-8">
      ${htmlTrocarEstado(servico)}
      <div class="rounded-xl p-4 ${classeStatus(servico)}">
        <p class="font-extrabold">${escaparHtml(rotuloStatus(servico))}</p>
        <p class="mt-1 text-sm">${escaparHtml(legendaStatus[servico.status_conteudo] || 'Consulte as observações e pendências antes de seguir.')}</p>
      </div>

      <section class="mt-5 grid gap-3 sm:grid-cols-2" aria-label="Custo e prazo">
        ${caixaInfo('Custo', servico.custo && servico.custo.descricao, alertaCusto(servico.custo))}
        ${caixaInfo('Prazo', servico.prazo && servico.prazo.descricao, alertaPrazo(servico.prazo))}
      </section>

      ${htmlAcoes()}

      <section class="mt-6">
        <h3 class="text-lg font-extrabold">Sobre o serviço</h3>
        <p class="mt-2 leading-relaxed">${escaparHtml(servico.descricao || 'Não informado na pesquisa.')}</p>
        <p class="mt-3 text-sm text-suave"><strong class="text-tinta">Para quem:</strong> ${escaparHtml(servico.publico || 'Não informado na pesquisa.')}</p>
        ${comoLista(servico.condicoes_acesso).length ? `<p class="mt-2 text-sm text-suave"><strong class="text-tinta">Condições:</strong> ${escaparHtml(servico.condicoes_acesso.join(' · '))}</p>` : ''}
      </section>

      ${htmlChecklist(servico)}

      ${secao('Documentos que podem ser pedidos', servico.documentos_condicionais, (item) => `
        <li class="rounded-xl border border-linha p-3.5">
          <p class="font-semibold">${escaparHtml(item.documento || item)}</p>
          ${item.quando ? `<p class="mt-1 text-sm text-suave"><strong class="text-tinta">Quando:</strong> ${escaparHtml(item.quando)}</p>` : ''}
          ${item.observacao ? `<p class="mt-1 text-sm text-suave">${escaparHtml(item.observacao)}</p>` : ''}
        </li>`)}

      ${secao('Passo a passo', servico.passo_a_passo, (item) => `
        <li class="flex gap-3 rounded-xl border border-linha p-3.5">
          <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ceu font-extrabold text-azul">${escaparHtml(item.ordem || '•')}</span>
          <div>
            <p>${escaparHtml(item.acao || item)}</p>
            ${item.canal_url ? `<a class="mt-1 inline-block text-sm font-semibold text-azul underline" href="${escaparHtml(item.canal_url)}" target="_blank" rel="noopener noreferrer">Abrir a página desta etapa<span class="sr-only"> (abre em nova aba)</span></a>` : ''}
          </div>
        </li>`)}

      ${canalPrincipal ? `<a class="btn-sol mt-6 w-full" href="${escaparHtml(canalPrincipal.url)}" target="_blank" rel="noopener noreferrer">Ir ao canal oficial: ${escaparHtml(canalPrincipal.nome || 'portal do órgão')}<span class="sr-only"> (abre em nova aba)</span></a>` : ''}

      ${secao('Pontos que ainda precisam de confirmação', servico.pendencias, (item) => `<li class="rounded-xl bg-aviso-fundo p-3.5 text-aviso">${escaparHtml(item)}</li>`)}

      ${secao('Fontes consultadas', servico.fontes, (fonte) => `
        <li class="rounded-xl bg-fundo p-3.5">
          <a class="font-bold text-azul underline" href="${escaparHtml(fonte.url || '#')}" target="_blank" rel="noopener noreferrer">${escaparHtml(fonte.titulo || 'Consultar fonte')}</a>
          <p class="mt-1 text-sm text-suave">${escaparHtml(fonte.orgao || '')} · Consulta: ${escaparHtml(fonte.data_consulta || 'data não informada')}</p>
        </li>`)}

      <p class="mt-6 text-xs text-suave">Conteúdo conferido em ${escaparHtml(servico.data_consulta || 'data não informada')}. Encontrou algo diferente? <a class="font-semibold text-azul underline" href="contato.html">Avise a equipe</a>.</p>
    </div>`;

  pararLeitura();
  servicoAberto = servico;
  mostrarNoDialogo(html);
  atualizarChecklist(servico);
  guardarEnderecoDoServico(servico.id);
}

/* ---------- Ferramentas do diálogo: ouvir, imprimir, compartilhar ---------- */

function htmlAcoes() {
  const botao = 'btn-acess gap-2 px-4 text-sm';
  const icone = (caminho) => `<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${caminho}</svg>`;
  return `
    <div class="no-print mt-4 flex flex-wrap gap-2" role="group" aria-label="Ferramentas deste serviço">
      ${sintese ? `<button type="button" class="${botao}" data-acao="ouvir" aria-pressed="false">${icone('<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>')}<span>Ouvir</span></button>` : ''}
      <button type="button" class="${botao}" data-acao="imprimir">${icone('<path d="M6 9V3h12v6M6 18H4v-7h16v7h-2M7 14h10v7H7z"/>')}<span>Imprimir</span></button>
      <button type="button" class="${botao}" data-acao="whatsapp">${icone('<path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.9A8 8 0 1 1 21 12z"/>')}<span>Enviar no WhatsApp</span></button>
      ${temLinkPublico ? `<button type="button" class="${botao}" data-acao="copiar">${icone('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>')}<span>Copiar link</span></button>` : ''}
    </div>
    <p id="avisoDialogo" class="no-print mt-2 text-sm font-semibold text-sucesso" role="status" hidden></p>`;
}

function avisarNoDialogo(texto) {
  const aviso = conteudoDialogo.querySelector('#avisoDialogo');
  if (!aviso) return;
  aviso.textContent = texto;
  aviso.hidden = false;
  clearTimeout(avisarNoDialogo.timer);
  avisarNoDialogo.timer = setTimeout(() => { aviso.hidden = true; }, 3000);
}

function nomeDoDocumento(item) {
  return item.documento || item;
}

function textoParaOuvir(servico) {
  const documentos = comoLista(servico.documentos_obrigatorios).map(nomeDoDocumento);
  const passos = comoLista(servico.passo_a_passo).map((passo, indice) => `${indice + 1}. ${passo.acao || passo}`);
  return [
    `${servico.nome}.`,
    servico.descricao,
    `Custo: ${(servico.custo && servico.custo.descricao) || 'não informado'}.`,
    `Prazo: ${(servico.prazo && servico.prazo.descricao) || 'não informado'}.`,
    documentos.length ? `Documentos: ${documentos.join(', ')}.` : '',
    passos.length ? `Passo a passo: ${passos.join(' ')}` : ''
  ].filter(Boolean).join(' ');
}

function pararLeitura() {
  if (sintese) sintese.cancel();
  const botao = conteudoDialogo.querySelector('[data-acao="ouvir"]');
  if (botao) {
    botao.setAttribute('aria-pressed', 'false');
    botao.querySelector('span').textContent = 'Ouvir';
  }
}

function alternarLeitura(servico, botao) {
  if (botao.getAttribute('aria-pressed') === 'true') {
    pararLeitura();
    return;
  }
  sintese.cancel();
  const fala = new SpeechSynthesisUtterance(textoParaOuvir(servico));
  fala.lang = 'pt-BR';
  fala.rate = 0.9;
  fala.onend = pararLeitura;
  fala.onerror = pararLeitura;
  botao.setAttribute('aria-pressed', 'true');
  botao.querySelector('span').textContent = 'Parar';
  sintese.speak(fala);
}

/* Mensagem pronta para mandar a um familiar: o que levar, quanto custa e onde pedir. */
function textoParaCompartilhar(servico) {
  const documentos = comoLista(servico.documentos_obrigatorios).map(nomeDoDocumento);
  const marcados = documentosMarcados[servico.id] || new Set();
  const canal = comoLista(servico.canais).find((item) => item.url);
  const linhas = [`*${servico.nome}* (${nomeLocal(servico)})`];
  if (documentos.length) {
    linhas.push('', 'O que levar:');
    documentos.forEach((nome, indice) => linhas.push(`${marcados.has(indice) ? '✅' : '⬜'} ${nome}`));
  }
  linhas.push('', `Custo: ${(servico.custo && servico.custo.descricao) || 'não informado'}`);
  linhas.push(`Prazo: ${(servico.prazo && servico.prazo.descricao) || 'não informado'}`);
  if (canal) linhas.push(`Canal oficial: ${canal.url}`);
  linhas.push('', 'Confira as regras no canal oficial antes de ir. Via Serviço Fácil.');
  return linhas.join('\n');
}

async function copiarLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    avisarNoDialogo('Link copiado.');
  } catch (erro) {
    avisarNoDialogo('Não foi possível copiar. Copie o endereço na barra do navegador.');
  }
}

/* O endereço da página passa a apontar para o serviço aberto (servicos.html#servico=ID). */
function guardarEnderecoDoServico(id) {
  try {
    history.replaceState(null, '', id ? `#servico=${encodeURIComponent(id)}` : window.location.pathname + window.location.search);
  } catch (erro) {
    /* Alguns navegadores bloqueiam isso em arquivo local: o site funciona do mesmo jeito. */
  }
}

function abrirPeloEndereco() {
  const id = decodeURIComponent((window.location.hash.match(/^#servico=(.+)$/) || [])[1] || '');
  if (!id) return;
  if (servicos.some((item) => item.id === id)) abrirServico(id);
  else if (comoLista(servicosBase).some((item) => item.id === id)) abrirServicoBase(id);
}

/* ---------- Eventos ---------- */

campoBusca.addEventListener('input', mostrarServicos);
filtroCategoria.addEventListener('change', mostrarServicos);
filtroEstado.addEventListener('change', mostrarServicos);

document.querySelector('#limparBusca').addEventListener('click', () => {
  campoBusca.value = '';
  filtroCategoria.value = '';
  filtroEstado.value = '';
  mostrarServicos();
  campoBusca.focus();
});

document.querySelector('#mostrarTodos').addEventListener('click', () => {
  document.querySelector('#limparBusca').click();
});

grade.addEventListener('click', (evento) => {
  const botaoServico = evento.target.closest('[data-servico]');
  if (botaoServico) abrirServico(botaoServico.dataset.servico, botaoServico);
  const botaoBase = evento.target.closest('[data-base]');
  if (botaoBase) abrirServicoBase(botaoBase.dataset.base, botaoBase);
});

/* Escolha do estado dentro do diálogo de um serviço com regras por estado. */
conteudoDialogo.addEventListener('click', (evento) => {
  const botaoFicha = evento.target.closest('[data-ficha]');
  if (botaoFicha) abrirServico(botaoFicha.dataset.ficha);
});

/* Marcar/desmarcar um documento do checklist atualiza o contador e a barra. */
conteudoDialogo.addEventListener('change', (evento) => {
  if (evento.target.id === 'trocarEstado') {
    abrirServico(evento.target.value);
    conteudoDialogo.querySelector('#trocarEstado').focus();
    return;
  }
  const caixa = evento.target.closest('[data-documento]');
  if (!caixa || !servicoAberto) return;
  const marcados = documentosMarcados[servicoAberto.id] || new Set();
  const indice = Number(caixa.dataset.documento);
  if (caixa.checked) marcados.add(indice); else marcados.delete(indice);
  documentosMarcados[servicoAberto.id] = marcados;
  salvarMarcados();
  atualizarChecklist(servicoAberto);
});

/* Ferramentas do diálogo (ouvir, imprimir, WhatsApp, copiar link) e "limpar marcações". */
conteudoDialogo.addEventListener('click', (evento) => {
  const botao = evento.target.closest('[data-acao]');
  if (!botao || !servicoAberto) return;
  const acao = botao.dataset.acao;
  if (acao === 'ouvir') alternarLeitura(servicoAberto, botao);
  if (acao === 'imprimir') window.print();
  if (acao === 'copiar') copiarLink();
  if (acao === 'whatsapp') {
    window.open(`https://wa.me/?text=${encodeURIComponent(textoParaCompartilhar(servicoAberto))}`, '_blank', 'noopener');
  }
  if (acao === 'limpar-checklist') {
    delete documentosMarcados[servicoAberto.id];
    salvarMarcados();
    abrirServico(servicoAberto.id);
    conteudoDialogo.querySelector('#statusChecklist').focus();
  }
});

/* Clique fora do conteúdo fecha o diálogo. */
dialogo.addEventListener('click', (evento) => {
  if (evento.target === dialogo) dialogo.close();
});

/* Ao fechar (botão, Esc ou clique fora), o foco volta para o card que abriu. */
dialogo.addEventListener('close', () => {
  pararLeitura();
  guardarEnderecoDoServico(null);
  mostrarServicos(); /* atualiza o selo "X de Y documentos separados" dos cards */
  if (!botaoQueAbriu) return;
  const idServico = botaoQueAbriu.dataset.servico;
  const idBase = botaoQueAbriu.dataset.base;
  const seletor = idServico ? `[data-servico="${idServico}"]` : `[data-base="${idBase}"]`;
  const novoBotao = grade.querySelector(seletor);
  if (novoBotao) novoBotao.focus();
});

/* Atalhos de busca: um toque preenche o campo. */
document.querySelector('#atalhos').addEventListener('click', (evento) => {
  const atalho = evento.target.closest('[data-busca]');
  if (!atalho) return;
  campoBusca.value = atalho.dataset.busca;
  filtroCategoria.value = '';
  filtroEstado.value = '';
  mostrarServicos();
  grade.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* Busca vinda da página inicial: servicos.html?busca=cpf */
const buscaInicial = new URLSearchParams(window.location.search).get('busca');
if (buscaInicial) campoBusca.value = buscaInicial;

preencherFiltros();
mostrarServicos();
abrirPeloEndereco();
