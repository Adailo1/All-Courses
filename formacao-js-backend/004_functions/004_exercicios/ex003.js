//Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

const verificaPalindromo = (palavra) => {
    let palavraReversa = palavra.split('').reverse().join('').toUpperCase()
    if (palavra.toUpperCase() === palavraReversa) {
        return 'É palindromo'
    } else {
        return 'Não é palindromo'
    }
}

console.log(verificaPalindromo('Arara'))