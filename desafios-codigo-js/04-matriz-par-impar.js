/*
Desafio
Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.

Entrada
A entrada são arrays de tamanho variado que possuem somente números inteiros.

Saída
A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares, conforme exemplo abaixo:

let arr = gets().split(''); 
let arrVazio = []; 

// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede
*/

let arr = gets().split(''); 
let arrVazio = []; 


for (let i = 0; i < arr.length; i++){
  if(arr[i] % 2 === 0){
    arrVazio.unshift(arr[i])
  } else {
    arrVazio.push(arr[i])
  }
}


print(arrVazio)

/*
Explicação abaixo sobre o código acima:

O código acima verifica se o número no índice atual do array é par ou ímpar. Se o número for par, ele será colocado no início do array, caso contrário, ele será adicionado ao final do array.
*/