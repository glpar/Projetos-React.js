/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

const valor = {
    receitas: [20, 30, 40 , 110],
    despesas: [32, 45, 55, 60]
}

function contas(teste) {
    let receitaTotal = 0;
    let despesaTotal = 0;

    for(i=0; i < teste.receitas.length; i++){
        receitaTotal+= teste.receitas[i];
    }
    console.log(receitaTotal)

    for(i=0; i < teste.despesas.length; i++){
        despesaTotal+= teste.despesas[i];
    }

    console.log(despesaTotal)

    valorFinal = receitaTotal - despesaTotal;

    if(valorFinal > 0) {
        console.log("Valor da Família é positivo, " + "Saldo final é:" + valorFinal)
    }

    
    else if(valorFinal == 0) {
        console.log("Valor da Família é neutro, " + "Saldo final é:" + valorFinal)
    }

    
    else if(valorFinal < 0) {
        console.log("Valor da Família é negativo, " + "Saldo final é:" + valorFinal)
    }
}

contas(valor)