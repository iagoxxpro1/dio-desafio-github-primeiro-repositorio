/*
condicao boolean para verdadeiro ou falso, neste caso aprendemos com verdadeiro
ou falso para numeros pares

a funcao IF funciona como SE e a sua estrutura é "if () {}"
no exemplo abaixo o numeroPar é a condicao para verdadeiro/falso
e o log "executei" é a mensagem que vai dar se for verdadeiro. se for falso não aparecerá mensagem.

Para dar uma mensagem de retorno no IF negativo é só utilizar o "!" assim: (!numeroPar)
e colocar a mensagem desejada dentro do log
ou economizar linhas com a função SENAO "else", ficaria assim:
else { console.log('numeorImpar');}

o número 0 é nulo, para trazer uma mensagem de"número inválido" utilizamos a condição
IF ===0 com o log "o número é inválido" e colocamos 2 else para caso seja verdadeiro manter 
a msg "executei" ou se falso "numero impar"

*/

const numero=10;
const numeroPar= (numero%2) ===0;
    
if (numero === 0) {
    console.log('o numero é invalido');
} else if (numeroPar) {
    console.log('Executei');
} else {
    console.log('numeroImpar');

}