/*
crie uma classe para representar carros.
os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoCombustivel;

    constructor(marca, cor, gastoCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivel = gastoCombustivel;

    }

    calcularGastoViagem(distanciaKM, precoCombustivel) {
        return distanciaKM * this.gastoCombustivel * precoCombustivel
    }
}


const uno = new Carro('fiat', 'branco', 1 / 12);
const palio = new Carro('fiat', 'preto', 1 / 10);

console.log(uno);
console.log(uno.calcularGastoViagem(70, 5));
console.log(palio);
console.log(palio.calcularGastoViagem(70, 5));