/*
quando nos vamos criar uma lista, exemplo de alunos utilizamos conchetes []
a {} nos utilizamos para programacao
*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

/*soma das notas e divisão para saber média
const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];//cada numero dentro das [] é para buscar e somar em ordem 1º 2º 3º
//porém tem jeito mais fácil de somar

console.log(notas.length); //length faz a contagem de quantas notas há
console.log(soma / 5);
*/

/*este for é para soma de 0-9
for (let i = 0; i < 10; i++) { //for percorre uma repetida de x, exemplo de 0 a 10
    //let index ou let i é por onde se inicia, vai de acordo por onde for iniciar. pode ser 0 ou 99 ou até mil.
    //da letra LET até 0 é aonde se inicia
    //da letra I até <10 é aonde acaba
    //da letra I++ é para poder se manter o ciclo de contagem
    console.log(i);
}
*/

/*este for é para somar cada letra

const nome = 'iago figueiredo rubiar';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}
*/



