/* Serviço Fácil — comportamento comum a todas as páginas:
 * menu no celular, ajuste do tamanho da fonte (A− / A+) e modo de alto contraste.
 * Este arquivo é carregado no <head> para aplicar as preferências antes da página aparecer. */

const html = document.documentElement;
const FONTE_MIN = 1;
const FONTE_PADRAO = 2;
const FONTE_MAX = 5;

/* localStorage pode falhar (aba anônima, arquivo local bloqueado): por isso o try/catch. */
function lerPreferencia(chave, padrao) {
  try {
    const valor = localStorage.getItem(chave);
    return valor === null ? padrao : valor;
  } catch (erro) {
    return padrao;
  }
}

function salvarPreferencia(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch (erro) {
    /* Sem armazenamento: a preferência vale só para esta página. */
  }
}

let nivelFonte = Number(lerPreferencia('sf-fonte', FONTE_PADRAO)) || FONTE_PADRAO;
let altoContraste = lerPreferencia('sf-contraste', 'nao') === 'sim';

function aplicarFonte() {
  for (let nivel = FONTE_MIN; nivel <= FONTE_MAX; nivel++) {
    html.classList.remove('fonte-' + nivel);
  }
  if (nivelFonte !== FONTE_PADRAO) {
    html.classList.add('fonte-' + nivelFonte);
  }
}

function aplicarContraste() {
  html.classList.toggle('alto-contraste', altoContraste);
  const botao = document.querySelector('#btnContraste');
  if (botao) {
    botao.setAttribute('aria-pressed', String(altoContraste));
  }
}

/* Aplica já, antes de o corpo da página ser desenhado. */
aplicarFonte();
aplicarContraste();

/* Mensagem curta para leitores de tela e para quem enxerga (feedback de cada ação). */
function avisar(texto) {
  const aviso = document.querySelector('#avisoAcessibilidade');
  if (!aviso) return;
  aviso.textContent = texto;
  aviso.hidden = false;
  clearTimeout(avisar.timer);
  avisar.timer = setTimeout(() => { aviso.hidden = true; }, 2500);
}

document.addEventListener('DOMContentLoaded', () => {
  const botaoMenu = document.querySelector('#botaoMenu');
  const menu = document.querySelector('#menuPrincipal');

  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', () => {
      const aberto = botaoMenu.getAttribute('aria-expanded') === 'true';
      botaoMenu.setAttribute('aria-expanded', String(!aberto));
      menu.classList.toggle('aberto', !aberto);
    });

    /* Esc fecha o menu do celular e devolve o foco ao botão. */
    menu.addEventListener('keydown', (evento) => {
      if (evento.key === 'Escape' && menu.classList.contains('aberto')) {
        botaoMenu.setAttribute('aria-expanded', 'false');
        menu.classList.remove('aberto');
        botaoMenu.focus();
      }
    });
  }

  const botaoMenos = document.querySelector('#btnFonteMenos');
  const botaoMais = document.querySelector('#btnFonteMais');
  const botaoContraste = document.querySelector('#btnContraste');

  if (botaoMenos) {
    botaoMenos.addEventListener('click', () => {
      if (nivelFonte > FONTE_MIN) nivelFonte--;
      aplicarFonte();
      salvarPreferencia('sf-fonte', nivelFonte);
      avisar(nivelFonte === FONTE_MIN ? 'Fonte no tamanho mínimo.' : 'Fonte diminuída.');
    });
  }

  if (botaoMais) {
    botaoMais.addEventListener('click', () => {
      if (nivelFonte < FONTE_MAX) nivelFonte++;
      aplicarFonte();
      salvarPreferencia('sf-fonte', nivelFonte);
      avisar(nivelFonte === FONTE_MAX ? 'Fonte no tamanho máximo.' : 'Fonte aumentada.');
    });
  }

  if (botaoContraste) {
    botaoContraste.addEventListener('click', () => {
      altoContraste = !altoContraste;
      aplicarContraste();
      salvarPreferencia('sf-contraste', altoContraste ? 'sim' : 'nao');
      avisar(altoContraste ? 'Alto contraste ativado.' : 'Alto contraste desativado.');
    });
  }

  aplicarContraste();
});
