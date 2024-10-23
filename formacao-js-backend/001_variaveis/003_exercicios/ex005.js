//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

//if (true){
//    var firstName = 'Adailo'
//    console.log(firstName)
//}

//console.log(firstName) Tudo certo, o var não tem proteção de escopo

if (true){
    let firstName = 'Adailo'
    console.log(firstName)
}

console.log(firstName) //Reference error, quando é usando let, a variável não vai estar disponível no escopo global