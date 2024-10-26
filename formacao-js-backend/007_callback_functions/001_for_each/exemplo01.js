//Mostre na tela a média das notas

const notas = [10, 6.5, 8, 7.5]
let soma = 0

notas.forEach(function (nota){ //Callback: Função/Método que recebe como argumento outra função
    soma += nota //Vai repetir até acabar os elementos da lista, e o valor deles vai para a variável nota, que é o parâmetro da função 
})

console.log(`A média das notas é igual à ${soma / notas.length}`)