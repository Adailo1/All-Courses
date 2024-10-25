/*
Crie uma lista tridimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

Dicas:

comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
você pode resolver usando um for dentro de outro for.
*/

let matriz = [[], [], []];

for (let i = 1; true ; i){
    if (matriz[0].length == 3 && matriz[1].length == 3 && matriz[2].length == 3){
        break
    } else {
        if (matriz[0].length !== 3){
            matriz[0].push(i)
            i++
        } else if (matriz[1].length !== 3){
            matriz[1].push(i)
            i++
        } else if (matriz[2].length !== 3){
            matriz[2].push(i)
            i++
        }
    }
}

console.log(matriz)
console.log(matriz[0])
console.log(matriz[1])
console.log(matriz[2])