/*
Desafio  
Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

Entrada
A entrada consiste em um número inteiro n, representando o valor total. 

Saída
A saída consiste em retornar o menor número de números quadrados perfeitos.

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

const dp = new Array(n + 1).fill(Infinity); 
dp[0] = 0; 

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.
*/

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 
let res;
let count;
let countTotal;


const dp = new Array(n + 1).fill(Infinity); 


for (let i = 1; i < dp.length; i++) {
  if (i * i <= n) {
    dp[i] = i * i;
  } else {
    i = dp.length - 1;
  }
}
        
countTotal = 1000;
        
  for (let i = dp.length - 1; i > 0 && i <= n; i--) {


    if ((i > 0) && (dp[i] > 0)) {


      res = n;
      count = 0;


      for (let j = i; j > 0; j--) {


        while (res > 0) {
          if (res >= dp[j]) {
              res = res - dp[j];
              count++;
          } else {
              j--;
          }
        }
      }                


      if (countTotal > count) {
        countTotal = count;
      }


    }  
  }
  
print(countTotal);