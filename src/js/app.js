import servicesData from '../../data/servicos.json';
import nordesteData from '../../data/nordeste.json';
import '../input.css';

const allServices = [...(servicesData.servicos_nacionais || []), ...(servicesData.variacoes_estaduais || [])];
const categoryNames = {
  habilitacao: 'Habilitação', identificacao_civil: 'Identificação civil',
  documentacao_civil: 'Documentação civil', educacao: 'Educação',
  cidadania: 'Cidadania', trabalho: 'Trabalho', assistencia_social: 'Assistência social'
};
const ufNames = {
  AC:'Acre', AL:'Alagoas', AP:'Amapá', AM:'Amazonas', BA:'Bahia', CE:'Ceará', DF:'Distrito Federal',
  ES:'Espírito Santo', GO:'Goiás', MA:'Maranhão', MT:'Mato Grosso', MS:'Mato Grosso do Sul',
  MG:'Minas Gerais', PA:'Pará', PB:'Paraíba', PR:'Paraná', PE:'Pernambuco', PI:'Piauí',
  RJ:'Rio de Janeiro', RN:'Rio Grande do Norte', RS:'Rio Grande do Sul', RO:'Rondônia',
  RR:'Roraima', SC:'Santa Catarina', SP:'São Paulo', SE:'Sergipe', TO:'Tocantins'
};
const $ = (selector) => document.querySelector(selector);
const searchInput = $('#search');
const categorySelect = $('#category');
const stateSelect = $('#state');
const grid = $('#servicesGrid');
const dialog = $('#serviceDialog');

function escapeHtml(value = '') {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function list(value) { return Array.isArray(value) ? value : []; }
function textOr(value, fallback = 'Não informado na pesquisa.') { return value ? String(value) : fallback; }
function serviceLocation(service) {
  const uf = service.localidade?.uf;
  return uf ? `${ufNames[uf] || uf} (${uf})` : 'Nacional';
}
function serviceSearchText(service) {
  return [service.nome, ...(service.nomes_populares || []), service.descricao, service.orgao_responsavel,
    categoryNames[service.categoria], service.localidade?.uf].join(' ').toLocaleLowerCase('pt-BR');
}
function statusLabel(service) {
  return service.status_conteudo === 'confirmado' ? 'Informações confirmadas' : 'Informações parciais';
}
function fillFilters() {
  const categories = [...new Set(allServices.map(s => s.categoria).filter(Boolean))].sort();
  categories.forEach(key => categorySelect.add(new Option(categoryNames[key] || key, key)));
  const states = [...new Set(allServices.map(s => s.localidade?.uf).filter(Boolean))].sort();
  states.forEach(uf => stateSelect.add(new Option(`${ufNames[uf] || uf} (${uf})`, uf)));
}
function renderServices() {
  const query = searchInput.value.trim().toLocaleLowerCase('pt-BR');
  const category = categorySelect.value;
  const state = stateSelect.value;
  const filtered = allServices.filter(service => {
    const matchesText = !query || serviceSearchText(service).includes(query);
    const matchesCategory = !category || service.categoria === category;
    const matchesState = !state || service.localidade?.uf === state;
    return matchesText && matchesCategory && matchesState;
  });
  $('#resultCount').textContent = `${filtered.length} ${filtered.length === 1 ? 'serviço encontrado' : 'serviços encontrados'} de ${allServices.length}`;
  grid.innerHTML = filtered.map(service => `
    <article class="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
      <div class="mb-4 flex flex-wrap items-center gap-2">
        <span class="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-900">${escapeHtml(categoryNames[service.categoria] || service.categoria)}</span>
        <span class="rounded-full ${service.status_conteudo === 'confirmado' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-900'} px-3 py-1 text-xs font-bold">${escapeHtml(statusLabel(service))}</span>
      </div>
      <h3 class="text-xl font-extrabold leading-snug text-slate-950">${escapeHtml(service.nome)}</h3>
      <p class="mt-2 text-sm font-semibold text-slate-500">${escapeHtml(serviceLocation(service))} · ${escapeHtml(service.orgao_responsavel || 'Órgão não informado')}</p>
      <p class="mt-3 line-clamp-3 flex-1 text-base leading-relaxed text-slate-600">${escapeHtml(service.descricao || 'Descrição não informada.')}</p>
      <button data-service-id="${escapeHtml(service.id)}" class="mt-5 min-h-12 w-full rounded-xl bg-blue-800 px-4 font-bold text-white transition hover:bg-blue-900 focus-visible:outline focus-visible:outline-4 focus-visible:outline-blue-200">Ver detalhes do serviço <span aria-hidden="true">→</span></button>
    </article>`).join('');
  $('#emptyState').classList.toggle('hidden', filtered.length !== 0);
  grid.classList.toggle('hidden', filtered.length === 0);
}
function section(title, items, renderer) {
  if (!list(items).length) return `<section class="mt-6"><h3 class="text-lg font-extrabold text-slate-900">${title}</h3><p class="mt-2 text-slate-600">Não informado na pesquisa.</p></section>`;
  return `<section class="mt-6"><h3 class="text-lg font-extrabold text-slate-900">${title}</h3><ul class="mt-3 space-y-3">${items.map(renderer).join('')}</ul></section>`;
}
function openService(id) {
  const service = allServices.find(item => item.id === id);
  if (!service) return;
  const channels = list(service.canais).map(c => `<li class="rounded-xl border border-slate-200 p-3"><p class="font-bold text-slate-900">${escapeHtml(c.nome || c.tipo || 'Canal oficial')}</p>${c.url ? `<a class="mt-1 inline-block break-all font-semibold text-blue-800 underline" href="${escapeHtml(c.url)}" target="_blank" rel="noopener noreferrer">Acessar canal oficial ↗</a>` : ''}</li>`);
  const sources = list(service.fontes).map(source => `<li class="rounded-xl bg-slate-50 p-3"><a class="font-bold text-blue-800 underline" href="${escapeHtml(source.url || '#')}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.titulo || 'Consultar fonte')}</a><p class="mt-1 text-sm text-slate-600">${escapeHtml(source.orgao || '')} · Consulta: ${escapeHtml(source.data_consulta || 'Data não informada')}</p></li>`);
  const content = `
    <div class="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
      <div><p class="text-sm font-bold uppercase tracking-wide text-blue-800">${escapeHtml(categoryNames[service.categoria] || service.categoria)}</p><h2 class="mt-1 text-2xl font-extrabold leading-tight text-slate-950">${escapeHtml(service.nome)}</h2><p class="mt-2 text-sm text-slate-600">${escapeHtml(serviceLocation(service))} · ${escapeHtml(service.orgao_responsavel || 'Órgão não informado')}</p></div>
      <button id="closeDialog" class="dialog-close rounded-xl border border-slate-300 px-3 text-xl font-bold text-slate-700 hover:bg-slate-100" aria-label="Fechar detalhes">×</button>
    </div>
    <div class="px-5 py-6 sm:px-8">
      <div class="rounded-xl ${service.status_conteudo === 'confirmado' ? 'bg-green-50 text-green-950' : 'bg-amber-50 text-amber-950'} p-4"><p class="font-extrabold">${escapeHtml(statusLabel(service))}</p><p class="mt-1 text-sm">${escapeHtml(servicesData.legendas?.status_conteudo?.[service.status_conteudo] || 'Consulte as observações e pendências antes de seguir.')}</p></div>
      <section class="mt-6"><h3 class="text-lg font-extrabold">Sobre o serviço</h3><p class="mt-2 leading-relaxed text-slate-700">${escapeHtml(textOr(service.descricao))}</p><p class="mt-3 text-sm text-slate-600"><strong>Para quem:</strong> ${escapeHtml(textOr(service.publico))}</p><p class="mt-2 text-sm text-slate-600"><strong>Condições de acesso:</strong> ${escapeHtml(list(service.condicoes_acesso).join(' · ') || 'Não informado na pesquisa.')}</p></section>
      ${section('Documentos obrigatórios', service.documentos_obrigatorios, item => `<li class="rounded-xl border border-slate-200 p-3"><p class="font-semibold">${escapeHtml(item.documento || item)}</p>${item.observacao ? `<p class="mt-1 text-sm text-slate-600">${escapeHtml(item.observacao)}</p>` : ''}</li>`)}
      ${section('Documentos que podem ser necessários', service.documentos_condicionais, item => `<li class="rounded-xl border border-slate-200 p-3"><p class="font-semibold">${escapeHtml(item.documento || item)}</p>${item.quando ? `<p class="mt-1 text-sm text-slate-600"><strong>Quando:</strong> ${escapeHtml(item.quando)}</p>` : ''}${item.observacao ? `<p class="mt-1 text-sm text-slate-600">${escapeHtml(item.observacao)}</p>` : ''}</li>`)}
      ${section('Passo a passo', service.passo_a_passo, item => `<li class="flex gap-3 rounded-xl border border-slate-200 p-3"><span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-100 font-extrabold text-blue-900">${escapeHtml(item.ordem || '•')}</span><div><p class="text-slate-800">${escapeHtml(item.acao || item)}</p>${item.canal_url ? `<a class="mt-1 inline-block text-sm font-semibold text-blue-800 underline" href="${escapeHtml(item.canal_url)}" target="_blank" rel="noopener noreferrer">Abrir página desta etapa ↗</a>` : ''}</div></li>`)}
      <section class="mt-6 grid gap-3 sm:grid-cols-2"><div class="rounded-xl bg-slate-100 p-4"><p class="text-sm font-bold text-slate-600">Custo</p><p class="mt-1 font-semibold">${escapeHtml(service.custo?.descricao || 'Não informado na pesquisa.')}</p></div><div class="rounded-xl bg-slate-100 p-4"><p class="text-sm font-bold text-slate-600">Prazo</p><p class="mt-1 font-semibold">${escapeHtml(service.prazo?.descricao || 'Não informado na pesquisa.')}</p></div></section>
      ${section('Canais de atendimento', channels, item => item)}
      ${section('Observações', service.observacoes, item => `<li class="rounded-xl bg-slate-50 p-3 text-slate-700">${escapeHtml(item)}</li>`)}
      ${section('Pontos que ainda precisam de confirmação', service.pendencias, item => `<li class="rounded-xl bg-amber-50 p-3 text-amber-950">${escapeHtml(item)}</li>`)}
      ${section('Fontes consultadas', sources, item => item)}
      <p class="mt-6 text-xs text-slate-500">Conteúdo consultado em ${escapeHtml(service.data_consulta || 'data não informada')}. Confirme as informações no canal oficial.</p>
    </div>`;
  $('#dialogContent').innerHTML = content;
  dialog.showModal();
  $('#closeDialog').addEventListener('click', () => dialog.close());
}
function renderSources() {
  const stateCards = list(nordesteData.estados).map(state => {
    const portals = list(state.portais_servicos).map(p => `<li><a class="font-semibold text-blue-800 underline" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.nome)} ↗</a><span class="ml-2 text-xs text-slate-500">${escapeHtml(p.utilidade || 'utilidade não classificada')}</span>${p.observacao ? `<p class="text-sm text-slate-600">${escapeHtml(p.observacao)}</p>` : ''}</li>`).join('');
    const apis = list(state.apis).map(api => `<li><a class="font-semibold text-blue-800 underline" href="${escapeHtml(api.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(api.nome)} ↗</a><span class="ml-2 text-xs text-slate-500">${escapeHtml(api.utilidade || 'utilidade não classificada')}</span></li>`).join('');
    return `<article class="rounded-2xl border border-slate-200 bg-white p-5"><h3 class="text-lg font-extrabold">${escapeHtml(state.estado)} <span class="text-sm font-semibold text-slate-500">(${escapeHtml(state.sigla)})</span></h3><p class="mt-1 text-sm text-slate-600">${escapeHtml(state.fonte || '')}</p>${portals ? `<h4 class="mt-4 font-bold">Portais de serviços</h4><ul class="mt-2 space-y-2">${portals}</ul>` : ''}${apis ? `<h4 class="mt-4 font-bold">APIs e dados</h4><ul class="mt-2 space-y-2">${apis}</ul>` : ''}</article>`;
  });
  const integrations = list(servicesData.fontes_integracao_comuns).map(item => `<article class="rounded-2xl border border-blue-200 bg-blue-50 p-5"><h3 class="font-extrabold">${escapeHtml(item.nome)}</h3><p class="mt-1 text-sm text-slate-600">${escapeHtml(item.orgao || '')} · ${escapeHtml(item.abrangencia || '')}</p><p class="mt-3 text-sm leading-relaxed text-slate-700">${escapeHtml(list(item.informacoes).join(' · '))}</p><div class="mt-3 flex flex-wrap gap-3">${item.url_oficial ? `<a class="font-bold text-blue-900 underline" href="${escapeHtml(item.url_oficial)}" target="_blank" rel="noopener noreferrer">Página oficial ↗</a>` : ''}${item.url_documentacao ? `<a class="font-bold text-blue-900 underline" href="${escapeHtml(item.url_documentacao)}" target="_blank" rel="noopener noreferrer">Documentação ↗</a>` : ''}</div></article>`);
  $('#sourcesList').innerHTML = [...stateCards, ...integrations].join('');
}

searchInput.addEventListener('input', renderServices);
categorySelect.addEventListener('change', renderServices);
stateSelect.addEventListener('change', renderServices);
$('#clearSearch').addEventListener('click', () => { searchInput.value = ''; renderServices(); searchInput.focus(); });
$('#resetFilters').addEventListener('click', () => { searchInput.value = ''; categorySelect.value = ''; stateSelect.value = ''; renderServices(); });
grid.addEventListener('click', event => { const button = event.target.closest('[data-service-id]'); if (button) openService(button.dataset.serviceId); });
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

fillFilters();
renderServices();
renderSources();
