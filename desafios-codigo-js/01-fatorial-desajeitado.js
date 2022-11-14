/*
Desafio
O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

Entrada
A entrada consiste em um valor inteiro positivo N.

Saída
A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) { 

 print(n); 

} 
*/

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) { 

 print(n); 

} 

let i = n;
let arr = []
let total = 0


while (i >= 1) {
    arr[i] = i
    i--
}
arr.shift()
let array = arr.reverse()
let a = array.length


while (array.length > 0) {
    if (array.length >= 4) {
        total += parseInt((array[0] * array[1]) / (array[2])) + array[3]
        array.splice(0, 4)        
        while (array.length >= 4) {
            total = total - parseInt((array[0] * array[1]) / array[2]) + array[3]
            array.splice(0, 4)
        }
        if (array.lengh == 3) {
            total = total - parseInt((array[0] * array[1]) / array[2])
            array.splice(0, 3)
        }
        if (array.length == 2) {
            total = total - (array[0] * array[1])
            array.splice(0, 2)
        }
        if (array.length == 1) {
            total = total - array[0]
            array.splice(0, 1)
        }
    }
    if (array.lengh == 3) {
        total = total + parseInt((array[0] * array[1]) / array[2])
        array.splice(0, 3)
        if (array.length == 2) {
            total = total - (array[0] * array[1])
            array.splice(0, 2)
        }
        if (array.length == 1) {
            total = total - array[0]
            array.splice(0, 1)
        }
    }
    if (array.length == 2) {
        total = total - (array[0] * array[1])
        array.splice(0, 2)
    }
}
console.log(parseInt(total))