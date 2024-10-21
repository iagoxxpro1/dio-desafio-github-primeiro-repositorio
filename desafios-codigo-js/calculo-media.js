// Faça um programa que receba a média de um aluno
// caso a média seja < 5 imprima "reprovado"
// caso a média seja >= e < 7 imprima "recuperação"
// caso a média seja >= 7 imprima "aprovado"

// Faça um programa que receba a média de um aluno
// caso a média seja < 5 imprima "reprovado"
// caso a média seja >= e < 7 imprima "recuperação"
// caso a média seja >= 7 imprima "aprovado"

const media = 2;

if (media >= 0 && media < 5) {
  console.log("reprovado");
} else if (media >= 5 && media < 7) {
  console.log("recuperação");
} else if (media >= 7) {
  console.log("aprovado");
} else {
  console.log("numero inválido");
}
