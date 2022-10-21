/*
O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

ELabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 está abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade grave;

*/

const peso = 140;
const altura = 1.75;
const imc = peso / (altura * altura) /* poderia se usar também no lugar de "altura*altura" função ao quadrado "Math.pow(altura,2)"*/
console.log(imc.toFixed(4));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('obesidade grave');
}