/*
Desafio
Neste desafio você deverá construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida. 

Dado que temos a String "digital" uma vez invertida temos "latigid" que são diferentes. 

Logo, NÃO é um Palíndromo. 

Já se recebemos a string "radar" uma vez invertida temos "radar" que são iguais.

Entrada
A entrada consiste em um palavra.

Saída
Para cada String informada, terá uma saída de valor Booleano: TRUE, caso a palavra seja um palíndromo, ou FALSE caso a palavra NÃO seja um palíndromo.

let resultado = gets();
print(checaPalindromo(entrada));

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.
*/

let resultado = gets();
print(checaPalindromo(resultado));

function checaPalindromo(entrada){
  const letras = entrada.split('').reverse().join('')
  if(entrada === letras){
    return "TRUE"
  } else {
    return "FALSE" 
  }
}