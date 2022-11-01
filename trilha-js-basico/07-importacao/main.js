/*
uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 -100.
faca um programa que recebe os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.
Dados de entrada:
5
50
10
98
23
saída:
98
*/


const { gets, print } = require('./funcoes-auxiliares'); //esta funcao importa outros arquivos para cá

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);