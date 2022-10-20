programa
{
	
	funcao inicio() {
		real a, b, nota_a, nota_b
		escreva ("digite as notas da P1 e P2 do aluno A ")
		leia (a)
		leia (b)
		escreva ("digite as notas da P1 e P2 do aluno B ")
		leia (nota_a)
		leia (nota_b)

		escreva ("media do aluno A: ", media_aluno(a,b))
		escreva ("\nmedia do aluno B: ", media_aluno(nota_a, nota_b))
	}

	funcao real media_aluno(real nota_a, real nota_b) {
		retorne (nota_a + nota_b)/2
	}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 290; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */