const servicesData = window.SERVICES_DATA;
const nordesteData = window.NORDESTE_DATA;

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
    <article class="service-card">
      <div class="service-tags">
        <span class="tag tag-category">${escapeHtml(categoryNames[service.categoria] || service.categoria)}</span>
        <span class="tag ${service.status_conteudo === 'confirmado' ? 'tag-confirmed' : 'tag-partial'}">${escapeHtml(statusLabel(service))}</span>
      </div>
      <h3 class="service-title">${escapeHtml(service.nome)}</h3>
      <p class="service-meta">${escapeHtml(serviceLocation(service))} · ${escapeHtml(service.orgao_responsavel || 'Órgão não informado')}</p>
      <p class="service-description">${escapeHtml(service.descricao || 'Descrição não informada.')}</p>
      <button data-service-id="${escapeHtml(service.id)}" class="button button-primary service-action">Ver detalhes do serviço <span aria-hidden="true">→</span></button>
    </article>`).join('');
  $('#emptyState').classList.toggle('is-hidden', filtered.length !== 0);
  grid.classList.toggle('is-hidden', filtered.length === 0);
}
function section(title, items, renderer) {
  if (!list(items).length) return `<section class="detail-section"><h3>${title}</h3><p>Não informado na pesquisa.</p></section>`;
  return `<section class="detail-section"><h3>${title}</h3><ul class="detail-list">${items.map(renderer).join('')}</ul></section>`;
}
function openService(id) {
  const service = allServices.find(item => item.id === id);
  if (!service) return;
  const channels = list(service.canais).map(c => `<li class="detail-item"><p class="detail-item-title">${escapeHtml(c.nome || c.tipo || 'Canal oficial')}</p>${c.url ? `<a href="${escapeHtml(c.url)}" target="_blank" rel="noopener noreferrer">Acessar canal oficial ↗</a>` : ''}</li>`);
  const sources = list(service.fontes).map(source => `<li class="detail-item detail-item-muted"><a class="text-link" href="${escapeHtml(source.url || '#')}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.titulo || 'Consultar fonte')}</a><p class="detail-caption">${escapeHtml(source.orgao || '')} · Consulta: ${escapeHtml(source.data_consulta || 'Data não informada')}</p></li>`);
  const content = `
    <div class="dialog-header">
      <div><p class="dialog-category">${escapeHtml(categoryNames[service.categoria] || service.categoria)}</p><h2>${escapeHtml(service.nome)}</h2><p class="dialog-meta">${escapeHtml(serviceLocation(service))} · ${escapeHtml(service.orgao_responsavel || 'Órgão não informado')}</p></div>
      <button id="closeDialog" class="dialog-close" aria-label="Fechar detalhes">×</button>
    </div>
    <div class="dialog-body">
      <div class="status-notice ${service.status_conteudo === 'confirmado' ? 'status-confirmed' : 'status-partial'}"><p class="status-title">${escapeHtml(statusLabel(service))}</p><p>${escapeHtml(servicesData.legendas?.status_conteudo?.[service.status_conteudo] || 'Consulte as observações e pendências antes de seguir.')}</p></div>
      <section class="detail-section"><h3>Sobre o serviço</h3><p>${escapeHtml(textOr(service.descricao))}</p><p class="detail-copy"><strong>Para quem:</strong> ${escapeHtml(textOr(service.publico))}</p><p class="detail-copy"><strong>Condições de acesso:</strong> ${escapeHtml(list(service.condicoes_acesso).join(' · ') || 'Não informado na pesquisa.')}</p></section>
      ${section('Documentos obrigatórios', service.documentos_obrigatorios, item => `<li class="detail-item"><p class="detail-item-title">${escapeHtml(item.documento || item)}</p>${item.observacao ? `<p class="detail-caption">${escapeHtml(item.observacao)}</p>` : ''}</li>`)}
      ${section('Documentos que podem ser necessários', service.documentos_condicionais, item => `<li class="detail-item"><p class="detail-item-title">${escapeHtml(item.documento || item)}</p>${item.quando ? `<p class="detail-caption"><strong>Quando:</strong> ${escapeHtml(item.quando)}</p>` : ''}${item.observacao ? `<p class="detail-caption">${escapeHtml(item.observacao)}</p>` : ''}</li>`)}
      ${section('Passo a passo', service.passo_a_passo, item => `<li class="step-item"><span class="step-number">${escapeHtml(item.ordem || '•')}</span><div><p>${escapeHtml(item.acao || item)}</p>${item.canal_url ? `<a href="${escapeHtml(item.canal_url)}" target="_blank" rel="noopener noreferrer">Abrir página desta etapa ↗</a>` : ''}</div></li>`)}
      <section class="cost-grid"><div class="cost-item"><p>Custo</p><strong>${escapeHtml(service.custo?.descricao || 'Não informado na pesquisa.')}</strong></div><div class="cost-item"><p>Prazo</p><strong>${escapeHtml(service.prazo?.descricao || 'Não informado na pesquisa.')}</strong></div></section>
      ${section('Canais de atendimento', channels, item => item)}
      ${section('Observações', service.observacoes, item => `<li class="detail-item detail-item-muted">${escapeHtml(item)}</li>`)}
      ${section('Pontos que ainda precisam de confirmação', service.pendencias, item => `<li class="detail-item detail-item-warning">${escapeHtml(item)}</li>`)}
      ${section('Fontes consultadas', sources, item => item)}
      <p class="dialog-footnote">Conteúdo consultado em ${escapeHtml(service.data_consulta || 'data não informada')}. Confirme as informações no canal oficial.</p>
    </div>`;
  $('#dialogContent').innerHTML = content;
  dialog.showModal();
  $('#closeDialog').addEventListener('click', () => dialog.close());
}
function renderSources() {
  const stateCards = list(nordesteData.estados).map(state => {
    const portals = list(state.portais_servicos).map(p => `<li><a class="text-link" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.nome)} ↗</a><span class="source-label">${escapeHtml(p.utilidade || 'utilidade não classificada')}</span>${p.observacao ? `<p class="source-description">${escapeHtml(p.observacao)}</p>` : ''}</li>`).join('');
    const apis = list(state.apis).map(api => `<li><a class="text-link" href="${escapeHtml(api.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(api.nome)} ↗</a><span class="source-label">${escapeHtml(api.utilidade || 'utilidade não classificada')}</span></li>`).join('');
    return `<article class="source-card"><h3>${escapeHtml(state.estado)} <span>(${escapeHtml(state.sigla)})</span></h3><p class="source-description">${escapeHtml(state.fonte || '')}</p>${portals ? `<h4>Portais de serviços</h4><ul class="source-list">${portals}</ul>` : ''}${apis ? `<h4>APIs e dados</h4><ul class="source-list">${apis}</ul>` : ''}</article>`;
  });
  const integrations = list(servicesData.fontes_integracao_comuns).map(item => `<article class="source-card integration-card"><h3>${escapeHtml(item.nome)}</h3><p class="source-description">${escapeHtml(item.orgao || '')} · ${escapeHtml(item.abrangencia || '')}</p><p class="integration-description">${escapeHtml(list(item.informacoes).join(' · '))}</p><div class="integration-links">${item.url_oficial ? `<a class="text-link" href="${escapeHtml(item.url_oficial)}" target="_blank" rel="noopener noreferrer">Página oficial ↗</a>` : ''}${item.url_documentacao ? `<a class="text-link" href="${escapeHtml(item.url_documentacao)}" target="_blank" rel="noopener noreferrer">Documentação ↗</a>` : ''}</div></article>`);
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
