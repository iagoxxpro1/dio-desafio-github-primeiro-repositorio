const salarioBruto = 2000;
const adicionalBeneficios = 250;

function calculoPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}
function pegarAliquota(salario) {
  if (salario >= 0 && salario < 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}

const aliquotaImposto = pegarAliquota(salarioBruto);

const valorImposto = calculoPorcentagem(salarioBruto, aliquotaImposto);

const valorATransferir = salarioBruto - valorImposto + adicionalBeneficios;
console.log(valorATransferir);
