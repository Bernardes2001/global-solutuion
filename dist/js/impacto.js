/* Serviço Fácil — página Impacto.
 * Calcula os números do catálogo a partir do array `servicos` e lista o ecossistema de fontes. */

function mostrarNumeros() {
  /* Cada serviço com regras por estado (servicosBase) conta uma vez; as fichas estaduais são as variações dele. */
  const nacionais = servicos.filter((s) => !(s.localidade && s.localidade.uf)).length;
  const totalServicos = nacionais + comoLista(servicosBase).length;
  const estados = new Set(servicos.map((s) => s.localidade && s.localidade.uf).filter(Boolean)).size;
  const categorias = new Set(servicos.map((s) => s.categoria).filter(Boolean)).size;
  const confirmados = servicos.filter((s) => s.status_conteudo === 'confirmado').length;

  const numeros = [
    { valor: totalServicos, rotulo: 'serviços no catálogo' },
    { valor: nacionais, rotulo: 'serviços nacionais' },
    { valor: estados, rotulo: 'estados com regras próprias' },
    { valor: categorias, rotulo: `categorias (${confirmados} de ${servicos.length} fichas já totalmente confirmadas)` }
  ];

  document.querySelector('#numerosCatalogo').innerHTML = numeros.map((numero) => `
    <div class="card flex flex-col gap-1 p-6">
      <dt class="text-suave">${escaparHtml(numero.rotulo)}</dt>
      <dd class="order-first font-display text-5xl font-extrabold tracking-tight text-azul">${escaparHtml(numero.valor)}</dd>
    </div>`).join('');
}

function link(url, texto) {
  return `<a class="font-semibold text-azul underline" href="${escaparHtml(url)}" target="_blank" rel="noopener noreferrer">${escaparHtml(texto)}<span class="sr-only"> (abre em nova aba)</span></a>`;
}

function mostrarFontes() {
  const cardsEstados = comoLista(portaisEstaduais).map((estado) => {
    const portais = comoLista(estado.portais_servicos)
      .map((p) => `<li>${link(p.url, p.nome)}${p.observacao ? `<p class="text-sm text-suave">${escaparHtml(p.observacao)}</p>` : ''}</li>`)
      .join('');
    const apis = comoLista(estado.apis)
      .map((api) => `<li>${link(api.url, api.nome)}</li>`)
      .join('');
    return `
      <article class="card p-5">
        <h3 class="text-lg font-extrabold">${escaparHtml(estado.estado)} <span class="text-sm font-semibold text-suave">(${escaparHtml(estado.sigla)})</span></h3>
        ${portais ? `<h4 class="mt-4 font-bold">Portais de serviços</h4><ul class="mt-2 flex flex-col gap-2">${portais}</ul>` : ''}
        ${apis ? `<h4 class="mt-4 font-bold">APIs e dados abertos</h4><ul class="mt-2 flex flex-col gap-2">${apis}</ul>` : ''}
      </article>`;
  });

  const cardsIntegracao = comoLista(fontesIntegracao).map((item) => `
    <article class="card border-azul bg-ceu p-5">
      <h3 class="font-extrabold">${escaparHtml(item.nome)}</h3>
      <p class="mt-1 text-sm text-suave">${escaparHtml(item.orgao || '')}${item.abrangencia ? ` · ${escaparHtml(item.abrangencia)}` : ''}</p>
      <p class="mt-3 text-sm leading-relaxed">${escaparHtml(comoLista(item.informacoes).join(' · '))}</p>
      <div class="mt-3 flex flex-wrap gap-4">
        ${item.url_oficial ? link(item.url_oficial, 'Página oficial') : ''}
        ${item.url_documentacao ? link(item.url_documentacao, 'Documentação') : ''}
      </div>
    </article>`);

  document.querySelector('#listaFontes').innerHTML = [...cardsIntegracao, ...cardsEstados].join('');
}

mostrarNumeros();
mostrarFontes();
