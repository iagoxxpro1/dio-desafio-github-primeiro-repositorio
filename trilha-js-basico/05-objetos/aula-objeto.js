/*
Objeto é um agrupamento, ele coleciona dados.
Dentro de uma variável do nome VIctor podemos colocar o nome completo e a idade.
Na hora de ler victor ele trás todas as informações de uma vez ou por vez conforme solicitado.

objeto em JS é uma coleção dinâmica de chave e valor, é possivel adicionar informação mesmo em qualquer
outro canto do corpo da programação.

Para DELETAR algo pode se usar "delete iago.name;"
*/

const Iago = {
    name: 'Iago Figueiredo Rubiar',
    idade: 25,

    descrever: function () {
        console.log(`meu nome é ${this.name} e minha idade é ${this.idade}`);
    }
};

/*
Iago.altura = 1.62; // é possivel incrementar após a criação acima já com as informações

console.log(Iago);
console.log(Iago.name);
console.log(Iago.idade);
*/

/*
Iago.descrever();
*/

/*
Iago.name = 'Jennifer'; //troca as informações no caso de iago para jennifer
Iago.idade = 26;

Iago.descrever();
*/


const atributo = 'idade';
console.log(Iago[atributo]);