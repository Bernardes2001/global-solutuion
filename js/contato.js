const form = document.getElementById("contactForm");
const counter = document.getElementById("contador");
const feedback = document.getElementById("retorno");
const fields = ["nome", "email", "telefone", "assunto", "mensagem"];

const validators = {
  nome: (v) => (/^\S+\s+\S+/.test(v) ? "" : "Informe nome e sobrenome."),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Informe um e-mail válido."),
  telefone: (v) => (!v || /^\(\d{2}\) \d{4,5}-\d{4}$/.test(v) ? "" : "Use o formato (11) 91234-5678."),
  assunto: (v) => (v ? "" : "Selecione um assunto."),
  mensagem: (v) => (v.length >= 10 ? "" : "Escreva pelo menos 10 caracteres.")
};

function maskPhone(value) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : "";
  const cut = d.length > 10 ? 7 : 6;
  return `(${d.slice(0, 2)}) ${d.slice(2, cut)}${d.length > cut ? "-" + d.slice(cut) : ""}`;
}

function validate(name) {
  const input = form.elements[name];
  const error = document.getElementById(`${name}-erro`);
  const message = validators[name](input.value.trim());
  error.textContent = message;
  error.hidden = !message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
  return !message;
}

form.elements.telefone.addEventListener("input", (e) => { e.target.value = maskPhone(e.target.value); });
form.elements.mensagem.addEventListener("input", (e) => { counter.textContent = `${e.target.value.length} de 500`; });
fields.forEach((name) => form.elements[name].addEventListener("blur", () => validate(name)));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const invalid = fields.filter((name) => !validate(name));
  if (invalid.length) {
    form.elements[invalid[0]].focus();
    return;
  }
  feedback.textContent = "Mensagem enviada com sucesso! Responderemos em até 2 dias úteis.";
  feedback.classList.remove("is-hidden");
  form.reset();
  counter.textContent = "0 de 500";
});

form.addEventListener("reset", () => {
  fields.forEach((name) => {
    document.getElementById(`${name}-erro`).hidden = true;
    form.elements[name].removeAttribute("aria-invalid");
  });
  feedback.classList.add("is-hidden");
  counter.textContent = "0 de 500";
});
