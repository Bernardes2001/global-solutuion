/* Serviço Fácil — página Serviços (funcionalidade principal).
 * Lê o array `servicos` (js/dados.js), filtra pela busca e pelos filtros,
 * mostra os cards pelo DOM e abre os detalhes com o checklist de documentos. */

const campoBusca = document.querySelector('#busca');
const filtroCategoria = document.querySelector('#categoria');
const filtroEstado = document.querySelector('#estado');
const grade = document.querySelector('#gradeServicos');
const estadoVazio = document.querySelector('#estadoVazio');
const contagem = document.querySelector('#contagemResultados');
const dialogo = document.querySelector('#dialogoServico');
const conteudoDialogo = document.querySelector('#conteudoDialogo');

/* Documentos marcados pelo usuário, por serviço: { idDoServico: Set de índices } */
const documentosMarcados = {};
let botaoQueAbriu = null;
let servicoAberto = null;

function textoDeBusca(servico) {
  return normalizar([
    servico.nome,
    ...comoLista(servico.nomes_populares),
    servico.descricao,
    servico.orgao_responsavel,
    nomeCategoria(servico.categoria),
    servico.localidade && servico.localidade.uf
  ].join(' '));
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

  const ufs = [...new Set(servicos.map((s) => s.localidade && s.localidade.uf).filter(Boolean))].sort();
  ufs.forEach((uf) => filtroEstado.add(new Option(`${nomesUf[uf] || uf} (${uf})`, uf)));
}

function filtrar() {
  const termo = normalizar(campoBusca.value.trim());
  const categoria = filtroCategoria.value;
  const estado = filtroEstado.value;

  return servicos.filter((servico) => {
    const casaTexto = !termo || textoDeBusca(servico).includes(termo);
    const casaCategoria = !categoria || servico.categoria === categoria;
    /* Escolhendo um estado, mostramos os serviços dele + os nacionais (valem em todo o país). */
    const uf = servico.localidade && servico.localidade.uf;
    const casaEstado = !estado || uf === estado || !uf;
    return casaTexto && casaCategoria && casaEstado;
  });
}

function criarCard(servico) {
  return `
    <li class="card flex h-full flex-col gap-2.5 p-5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex flex-wrap gap-2">
        <span class="chip bg-ceu text-azul">${escaparHtml(nomeCategoria(servico.categoria))}</span>
        <span class="chip ${classeStatus(servico)}">${escaparHtml(rotuloStatus(servico))}</span>
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
  contagem.textContent = `${resultado.length} ${plural} de ${servicos.length}`;
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
    return `<section class="mt-6"><h3 class="text-lg font-extrabold">Checklist de documentos</h3><p class="mt-2 text-suave">A pesquisa não encontrou documentos obrigatórios confirmados para este serviço. Confira no canal oficial.</p></section>`;
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
        <p id="statusChecklist" class="text-sm font-bold" role="status"></p>
      </div>
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

function abrirServico(id, botao) {
  const servico = servicos.find((item) => item.id === id);
  if (!servico) return;
  botaoQueAbriu = botao;

  const canais = comoLista(servico.canais);
  const canalPrincipal = canais.find((canal) => canal.url);

  const html = `
    <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-linha bg-superficie px-5 py-5 sm:px-8">
      <div>
        <p class="eyebrow">${escaparHtml(nomeCategoria(servico.categoria))}</p>
        <h2 id="tituloDialogo" class="mt-1 text-2xl font-extrabold leading-tight">${escaparHtml(servico.nome)}</h2>
        <p class="mt-1.5 text-sm text-suave">${escaparHtml(nomeLocal(servico))} · ${escaparHtml(servico.orgao_responsavel || 'Órgão não informado')}</p>
      </div>
      <button type="button" id="fecharDialogo" class="btn-acess text-xl" aria-label="Fechar detalhes">×</button>
    </div>

    <div class="px-5 py-6 sm:px-8">
      <div class="rounded-xl p-4 ${classeStatus(servico)}">
        <p class="font-extrabold">${escaparHtml(rotuloStatus(servico))}</p>
        <p class="mt-1 text-sm">${escaparHtml(legendaStatus[servico.status_conteudo] || 'Consulte as observações e pendências antes de seguir.')}</p>
      </div>

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

      <section class="mt-6 grid gap-3 sm:grid-cols-2">
        <div class="rounded-xl bg-fundo p-4"><p class="text-xs font-bold uppercase text-suave">Custo</p><p class="mt-1 font-semibold">${escaparHtml((servico.custo && servico.custo.descricao) || 'Não informado na pesquisa.')}</p></div>
        <div class="rounded-xl bg-fundo p-4"><p class="text-xs font-bold uppercase text-suave">Prazo</p><p class="mt-1 font-semibold">${escaparHtml((servico.prazo && servico.prazo.descricao) || 'Não informado na pesquisa.')}</p></div>
      </section>

      ${canalPrincipal ? `<a class="btn-sol mt-6 w-full" href="${escaparHtml(canalPrincipal.url)}" target="_blank" rel="noopener noreferrer">Ir ao canal oficial: ${escaparHtml(canalPrincipal.nome || 'portal do órgão')}<span class="sr-only"> (abre em nova aba)</span></a>` : ''}

      ${secao('Pontos que ainda precisam de confirmação', servico.pendencias, (item) => `<li class="rounded-xl bg-aviso-fundo p-3.5 text-aviso">${escaparHtml(item)}</li>`)}

      ${secao('Fontes consultadas', servico.fontes, (fonte) => `
        <li class="rounded-xl bg-fundo p-3.5">
          <a class="font-bold text-azul underline" href="${escaparHtml(fonte.url || '#')}" target="_blank" rel="noopener noreferrer">${escaparHtml(fonte.titulo || 'Consultar fonte')}</a>
          <p class="mt-1 text-sm text-suave">${escaparHtml(fonte.orgao || '')} · Consulta: ${escaparHtml(fonte.data_consulta || 'data não informada')}</p>
        </li>`)}

      <p class="mt-6 text-xs text-suave">Conteúdo conferido em ${escaparHtml(servico.data_consulta || 'data não informada')}. Encontrou algo diferente? <a class="font-semibold text-azul underline" href="contato.html">Avise a equipe</a>.</p>
    </div>`;

  conteudoDialogo.innerHTML = html;
  atualizarChecklist(servico);
  dialogo.showModal();
  conteudoDialogo.querySelector('#fecharDialogo').focus();

  servicoAberto = servico;
  conteudoDialogo.querySelector('#fecharDialogo').addEventListener('click', () => dialogo.close());
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
  const botao = evento.target.closest('[data-servico]');
  if (botao) abrirServico(botao.dataset.servico, botao);
});

/* Marcar/desmarcar um documento do checklist atualiza o contador e a barra. */
conteudoDialogo.addEventListener('change', (evento) => {
  const caixa = evento.target.closest('[data-documento]');
  if (!caixa || !servicoAberto) return;
  const marcados = documentosMarcados[servicoAberto.id] || new Set();
  const indice = Number(caixa.dataset.documento);
  if (caixa.checked) marcados.add(indice); else marcados.delete(indice);
  documentosMarcados[servicoAberto.id] = marcados;
  atualizarChecklist(servicoAberto);
});

/* Clique fora do conteúdo fecha o diálogo. */
dialogo.addEventListener('click', (evento) => {
  if (evento.target === dialogo) dialogo.close();
});

/* Ao fechar (botão, Esc ou clique fora), o foco volta para o card que abriu. */
dialogo.addEventListener('close', () => {
  if (botaoQueAbriu) botaoQueAbriu.focus();
});

/* Busca vinda da página inicial: servicos.html?busca=cpf */
const buscaInicial = new URLSearchParams(window.location.search).get('busca');
if (buscaInicial) campoBusca.value = buscaInicial;

preencherFiltros();
mostrarServicos();
