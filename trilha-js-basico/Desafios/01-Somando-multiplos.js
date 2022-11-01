// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var a = 5;

var N = 20;

//TODO: Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

var soma = 0;

for (i = 0; i <= N; i++) {

    if (i % a === 0) {

        soma = soma + i

    }

}
console.log(soma)
console.log('O valor da soma de todos múltiplos de ' + a + ' até ' + N + ' é: ' + soma)