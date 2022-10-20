/* Faça um programa para calcular o valor gasto de uma viagem.
Voce tera tres variaveis. Sendo elas preco elas:
 - 1 Preco do combustivel;
 - 2 Gasto médio de combustível do carro por KM;
 - 3 distancia em KM da viagem;
Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoCombustivel=5.79;
const KMporLitro=1;
const distanciaKM=100;

const litrosConsumidos=distanciaKM/KMporLitro;
const valorGasto=litrosConsumidos*precoCombustivel

console.log(valorGasto.toFixed(2));