/*
No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.

Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
*/

let carro = {
    marca: 'Fiat', 
    modelo: 'Cronos', 
    ano: 2024,
    cor: 'Preto',
    placa: 'XXX1010'
}

Object.defineProperty(carro, 'placa', {
    enumerable: false    
})

for (let keys in carro){
    console.log(keys)
}

const listaKeys = Object.keys(carro)
console.log(listaKeys)

console.log(carro.placa)