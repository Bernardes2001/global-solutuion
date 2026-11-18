/* Gera js/dados.js a partir dos arquivos de pesquisa em data/.
 * Uso: npm run dados */

import { writeFileSync } from 'node:fs';
import { caminhos, gerarDadosJs, lerDados, montarServicos } from './dados-lib.mjs';

const dados = lerDados();
writeFileSync(caminhos.dadosJs, gerarDadosJs(dados));
const totalEstados = dados.nordeste.estados.length + dados.norte.estados.length + dados.sudeste.estados.length + dados.centroOeste.estados.length + dados.sul.estados.length;
console.log(`js/dados.js gerado: ${montarServicos(dados.pesquisa).length} fichas, ${(dados.pesquisa.servicos_base || []).length} serviços base, ${totalEstados} estados das cinco regiões.`);
