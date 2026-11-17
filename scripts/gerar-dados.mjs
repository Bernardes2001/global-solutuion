/* Gera js/dados.js a partir de data/servicos.json, data/nordeste.json e data/norte.json.
 * Uso: npm run dados */

import { writeFileSync } from 'node:fs';
import { caminhos, gerarDadosJs, lerDados, montarServicos } from './dados-lib.mjs';

const dados = lerDados();
writeFileSync(caminhos.dadosJs, gerarDadosJs(dados));
console.log(`js/dados.js gerado: ${montarServicos(dados.pesquisa).length} fichas, ${(dados.pesquisa.servicos_base || []).length} serviços base, ${dados.nordeste.estados.length + dados.norte.estados.length} estados do Nordeste e Norte.`);
