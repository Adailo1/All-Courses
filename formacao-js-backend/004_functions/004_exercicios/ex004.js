//Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

const pegaMaior = (num1, num2, num3) => {
    console.log(num1, num2, num3)
    if (num1 > num2 && num1 > num3) return num1
    else if (num2 > num1 && num2 > num3) return num2
    else if (num3> num1 && num3 > num2) return num3
    else if(num1 === num2) return num1
    else if (num1 === num3) return num1
    else if (num2 === num3) return num3
    else return num1
}

const geraRandom = () => {
    let num = Math.random()*100
    return Math.floor(num)
}

console.log(pegaMaior(geraRandom(), geraRandom(), geraRandom()))