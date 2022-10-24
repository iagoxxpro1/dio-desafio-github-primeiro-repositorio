


const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 99, 1, 7];
let i = 0;

function gets() { //pega a leitura de alguem fazendo a digitacao
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) { //imprime automaticamente o gets
    console.log(texto);
}

module.exports = { gets, print } //para outro arquivo receber estas 