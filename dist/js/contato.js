/* Serviço Fácil — página Fale conosco.
 * Valida o formulário em JavaScript e mostra erros e sucesso na própria página, sem janelas pop-up. */

const formulario = document.querySelector('#formContato');
const resumoErros = document.querySelector('#resumoErros');
const mensagemSucesso = document.querySelector('#mensagemSucesso');
const campoMensagem = document.querySelector('#mensagem');
const contadorMensagem = document.querySelector('#contadorMensagem');
const MINIMO_MENSAGEM = 20;
let jaTentouEnviar = false;

/* Preenche a lista de estados a partir da tabela em js/utils.js */
const seletorUf = document.querySelector('#uf');
Object.keys(nomesUf).sort().forEach((uf) => seletorUf.add(new Option(`${nomesUf[uf]} (${uf})`, uf)));

/* Cada regra devolve a mensagem de erro, ou '' quando o campo está certo. */
const regras = {
  nome: (valor) => {
    const texto = valor.trim();
    if (!texto) return 'Informe seu nome.';
    if (texto.length < 3) return 'O nome precisa ter pelo menos 3 letras.';
    if (!texto.includes(' ')) return 'Informe nome e sobrenome.';
    return '';
  },
  email: (valor) => {
    const texto = valor.trim();
    if (!texto) return 'Informe seu e-mail.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(texto)) return 'Digite um e-mail válido, como nome@exemplo.com.';
    return '';
  },
  assunto: (valor) => (valor ? '' : 'Escolha um assunto.'),
  mensagem: (valor) => {
    const tamanho = valor.trim().length;
    if (!tamanho) return 'Escreva sua mensagem.';
    if (tamanho < MINIMO_MENSAGEM) return `Escreva pelo menos ${MINIMO_MENSAGEM} caracteres (faltam ${MINIMO_MENSAGEM - tamanho}).`;
    return '';
  },
  consentimento: (_valor, campo) => (campo.checked ? '' : 'Marque a autorização para podermos responder.')
};

const idsErro = {
  nome: 'erroNome',
  email: 'erroEmail',
  assunto: 'erroAssunto',
  mensagem: 'erroMensagem',
  consentimento: 'erroConsentimento'
};

function validarCampo(nomeCampo) {
  const campo = formulario.elements[nomeCampo];
  const erro = regras[nomeCampo](campo.value, campo);
  const paragrafoErro = document.querySelector('#' + idsErro[nomeCampo]);

  paragrafoErro.textContent = erro;
  paragrafoErro.hidden = !erro;
  if (erro) {
    campo.setAttribute('aria-invalid', 'true');
  } else {
    campo.removeAttribute('aria-invalid');
  }
  return erro;
}

function mostrarResumo(erros) {
  if (!erros.length) {
    resumoErros.hidden = true;
    resumoErros.replaceChildren();
    return;
  }
  const quantidade = erros.length === 1 ? '1 campo' : `${erros.length} campos`;
  resumoErros.innerHTML = `
    <p>Corrija ${quantidade} para enviar:</p>
    <ul class="mt-2 list-disc pl-5 font-normal">
      ${erros.map((item) => `<li><a class="underline" href="#${item.campo}">${escaparHtml(item.mensagem)}</a></li>`).join('')}
    </ul>`;
  resumoErros.hidden = false;
}

function atualizarContador() {
  contadorMensagem.textContent = campoMensagem.value.trim().length;
}

campoMensagem.addEventListener('input', atualizarContador);

/* Depois da primeira tentativa, revalida enquanto a pessoa corrige. */
Object.keys(regras).forEach((nomeCampo) => {
  const campo = formulario.elements[nomeCampo];
  const evento = campo.type === 'checkbox' || campo.tagName === 'SELECT' ? 'change' : 'input';
  campo.addEventListener(evento, () => {
    if (jaTentouEnviar) validarCampo(nomeCampo);
  });
  campo.addEventListener('blur', () => {
    if (jaTentouEnviar || campo.value) validarCampo(nomeCampo);
  });
});

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  jaTentouEnviar = true;

  const erros = Object.keys(regras)
    .map((nomeCampo) => ({ campo: nomeCampo, mensagem: validarCampo(nomeCampo) }))
    .filter((item) => item.mensagem);

  mostrarResumo(erros);

  if (erros.length) {
    resumoErros.focus();
    return;
  }

  /* Sucesso: protótipo sem servidor, então só confirmamos na tela. */
  const primeiroNome = formulario.elements.nome.value.trim().split(' ')[0];
  const email = formulario.elements.email.value.trim();
  document.querySelector('#tituloSucesso').textContent = `Mensagem enviada, ${primeiroNome}!`;
  document.querySelector('#textoSucesso').textContent =
    `Obrigado por ajudar a manter o Serviço Fácil correto. Vamos responder em ${email}.`;

  formulario.hidden = true;
  mensagemSucesso.hidden = false;
  mensagemSucesso.focus();
});

document.querySelector('#novaMensagem').addEventListener('click', () => {
  formulario.reset();
  jaTentouEnviar = false;
  Object.keys(regras).forEach((nomeCampo) => {
    formulario.elements[nomeCampo].removeAttribute('aria-invalid');
    document.querySelector('#' + idsErro[nomeCampo]).hidden = true;
  });
  mostrarResumo([]);
  atualizarContador();
  mensagemSucesso.hidden = true;
  formulario.hidden = false;
  formulario.elements.nome.focus();
});
