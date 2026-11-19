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
  nome: (valor, campo) => {
    const texto = valor.trim().replace(/\s+/g, ' ');
    if (!texto) return 'Informe seu nome.';
    if (texto.length < 3) return 'O nome precisa ter pelo menos 3 caracteres.';
    if (texto.length > campo.maxLength) return `Use até ${campo.maxLength} caracteres no nome.`;
    if (!/^[\p{L}\p{M} .’'-]+$/u.test(texto)) return 'Use apenas letras, espaços, pontos, apóstrofos ou hífens no nome.';
    if (texto.split(' ').filter((parte) => /\p{L}/u.test(parte)).length < 2) return 'Informe nome e sobrenome.';
    return '';
  },
  email: (valor, campo) => {
    const texto = valor.trim();
    if (!texto) return 'Informe seu e-mail.';
    if (texto.length > campo.maxLength) return `Use até ${campo.maxLength} caracteres no e-mail.`;
    if (campo.validity.typeMismatch || !/^[^\s@.]+(?:\.[^\s@.]+)*@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z]{2,}$/i.test(texto)) return 'Digite um e-mail válido, como nome@exemplo.com.';
    return '';
  },
  telefone: (valor) => (!valor || /^\(\d{2}\) \d{4,5}-\d{4}$/.test(valor) ? '' : 'Informe um telefone com DDD, como (11) 91234-5678.'),
  assunto: (valor) => (valor ? '' : 'Escolha um assunto.'),
  mensagem: (valor, campo) => {
    const tamanho = valor.trim().length;
    if (!tamanho) return 'Escreva sua mensagem.';
    if (tamanho < MINIMO_MENSAGEM) return `Escreva pelo menos ${MINIMO_MENSAGEM} caracteres (faltam ${MINIMO_MENSAGEM - tamanho}).`;
    if (valor.length > campo.maxLength) return `Use até ${campo.maxLength} caracteres na mensagem.`;
    return '';
  },
  consentimento: (_valor, campo) => (campo.checked ? '' : 'Marque a autorização para podermos responder.')
};

const idsErro = {
  nome: 'erroNome',
  email: 'erroEmail',
  telefone: 'erroTelefone',
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
  contadorMensagem.textContent = campoMensagem.value.length;
}

campoMensagem.addEventListener('input', atualizarContador);

/* Formata ao sair do campo e antes de validar o envio, inclusive no preenchimento automático. */
function formatarCampo(campo) {
  if (campo.name === 'nome') campo.value = campo.value.trim().replace(/\s+/g, ' ');
  if (campo.name === 'email') campo.value = campo.value.trim().toLowerCase();
  if (campo.name !== 'telefone') return;

  const valorAnterior = campo.value;
  const cursor = campo.selectionStart;
  const digitosAntes = valorAnterior.slice(0, cursor).replace(/\D/g, '').length;
  const digitos = valorAnterior.replace(/\D/g, '').slice(0, 11);
  const corte = digitos.length > 10 ? 7 : 6;
  campo.value = digitos.length <= 2
    ? (digitos ? `(${digitos}` : '')
    : `(${digitos.slice(0, 2)}) ${digitos.slice(2, corte)}${digitos.length > corte ? '-' + digitos.slice(corte) : ''}`;

  /* Evita levar o cursor ao fim quando a pessoa edita no meio do número. */
  if (cursor !== null && cursor < valorAnterior.length && campo.value !== valorAnterior) {
    let posicao = 0;
    let contagem = 0;
    while (posicao < campo.value.length && contagem < digitosAntes) {
      if (/\d/.test(campo.value[posicao])) contagem++;
      posicao++;
    }
    campo.setSelectionRange(posicao, posicao);
  }
}

formulario.elements.telefone.addEventListener('input', (evento) => formatarCampo(evento.target));

function coletarErros() {
  return Object.keys(regras)
    .map((nomeCampo) => ({ campo: nomeCampo, mensagem: validarCampo(nomeCampo) }))
    .filter((item) => item.mensagem);
}

/* Depois da primeira tentativa, revalida enquanto a pessoa corrige. */
Object.keys(regras).forEach((nomeCampo) => {
  const campo = formulario.elements[nomeCampo];
  const evento = campo.type === 'checkbox' || campo.tagName === 'SELECT' ? 'change' : 'input';
  campo.addEventListener(evento, () => {
    if (jaTentouEnviar) mostrarResumo(coletarErros());
    else if (campo.hasAttribute('aria-invalid')) validarCampo(nomeCampo);
  });
  campo.addEventListener('blur', () => {
    formatarCampo(campo);
    validarCampo(nomeCampo);
    if (jaTentouEnviar) mostrarResumo(coletarErros());
  });
});

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  jaTentouEnviar = true;

  Object.keys(regras).forEach((nomeCampo) => formatarCampo(formulario.elements[nomeCampo]));
  const erros = coletarErros();

  mostrarResumo(erros);

  if (erros.length) {
    resumoErros.focus();
    return;
  }

  /* O protótipo valida os campos, mas não envia nem armazena a mensagem. */
  const primeiroNome = formulario.elements.nome.value.trim().split(' ')[0];
  document.querySelector('#tituloSucesso').textContent = `Mensagem validada, ${primeiroNome}!`;
  document.querySelector('#textoSucesso').textContent =
    'Os campos foram preenchidos corretamente. Esta é uma demonstração: sua mensagem não foi enviada nem armazenada.';

  formulario.hidden = true;
  mensagemSucesso.hidden = false;
  mensagemSucesso.focus();
});

formulario.addEventListener('reset', () => {
  jaTentouEnviar = false;
  Object.keys(regras).forEach((nomeCampo) => {
    formulario.elements[nomeCampo].removeAttribute('aria-invalid');
    const paragrafoErro = document.querySelector('#' + idsErro[nomeCampo]);
    paragrafoErro.textContent = '';
    paragrafoErro.hidden = true;
  });
  mostrarResumo([]);
  contadorMensagem.textContent = '0';
  mensagemSucesso.hidden = true;
  formulario.hidden = false;
});

document.querySelector('#novaMensagem').addEventListener('click', () => {
  formulario.reset();
  formulario.elements.nome.focus();
});
