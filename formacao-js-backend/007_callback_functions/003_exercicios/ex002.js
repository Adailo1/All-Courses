// Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcao){
    return array.map(funcao)
}

function dobraNumero(num){
    return num * 2
}

const numeros = [0, 2, 10, 6, 1] 
console.log(executaOperacaoEmArray(numeros, dobraNumero)) //Sem parênteses, a execução dessa função pertence ao callback