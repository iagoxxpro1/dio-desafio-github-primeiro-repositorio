// // Faça um programa que receba N (quantidade de números) e seus respectivos valores
// // Imprima o maior número par e o menor número ímpar

// const n = [5, 3, 4, 1, 10, 8];
// let maiorNumeroPar = -Infinity; // Inicializado com um valor muito baixo
// let menorNumeroImpar = Infinity; // Inicializado com um valor muito alto

// for (let i = 0; i < n.length; i++) {
//   const numero = n[i];

//   if (numero % 2 === 0) {
//     // Verifica se é par e se é maior que o atual maior número par
//     if (numero > maiorNumeroPar) {
//       maiorNumeroPar = numero;
//     }
//   } else {
//     // Verifica se é ímpar e se é menor que o atual menor número ímpar
//     if (numero < menorNumeroImpar) {
//       menorNumeroImpar = numero;
//     }
//   }
// }

// console.log("Maior número par:", maiorNumeroPar);
// console.log("Menor número ímpar:", menorNumeroImpar);

const n = [5, 3, 4, 1, 10, 8];
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n.length; i++) {
  const numero = n[i];

  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === null || numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}
console.log("Maior número par:", maiorNumeroPar);
console.log("Menor número ímpar:", menorNumeroImpar);
