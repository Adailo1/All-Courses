//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

let rain = Math.random(100) * 100 > 50 
let umbrella = rain ? 'Take the umbrella' : "Don't take the umbrella"
console.log(umbrella)