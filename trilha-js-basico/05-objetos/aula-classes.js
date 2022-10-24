/*
classe é para quando for incluir mais pessoas para este exemplo, poderia ser uma lista de anythings

classe é a definição do que deve ser o objeto e a instância é uma ocorrência do objeto. 
neste caso a lista de pessoas será a ocorrência.
*/


class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }


    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }

}
/*
const vitor = new pessoa(); //atribuindo uma nova pessoa
vitor.nome = 'vitor j guerra';
vitor.idade = 25;

const renan = new pessoa(); //atribuindo uma nova pessoa
renan.nome = 'renan j paula';
renan.idade = 30;

vitor.descrever();
renan.descrever();
*/

const vitor = new pessoa('vitor', 25); //este parâmetro é para a função do CONSTRUCTOR
const renan = new pessoa('renan', 30);

console.log(vitor);
console.log(renan);