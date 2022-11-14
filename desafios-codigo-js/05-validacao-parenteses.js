/*
Desafio
Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 

Entrada
Uma string é considerada válida se:

Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida. 

Saída
A saída corresponde a um valor Booleano como no exemplo abaixo:

var isValid = function(s) {    
    const stack = []; 

 //TODO: implemente a lógica de caracteres válidos e retorne se a string é valida ou não.


}
*/

let valor = gets()


print(isValid(valor))


function isValid(s) {    
    
  let letras = s.split('')
  const stack = ["(",")","{","}","[","]"]; 
  let b = false
  
  for(let i = 0; i < stack.length; i++){
    if ((letras[0] === stack[i]) && (letras[1] === stack [i + 1])){
     b = true;
    } 
  }
  return b;
}

/*
Explicação sobre o código acima:

O código acima verifica se uma string é válida ou não. Ele faz isso verificando se a primeira e a segunda letra são iguais a uma das letras no array "stack". Se forem, ele retorna "true". Se não forem, ele retorna "false".
*/