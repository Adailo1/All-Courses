//Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const potencia = (base, expoente) => {
    return `${base} ^ ${expoente} = ${base ** expoente}`
}

const geraRandom = () => {
    let num = Math.random()*10
    return Math.floor(num)
}

console.log(potencia(geraRandom(), geraRandom()))