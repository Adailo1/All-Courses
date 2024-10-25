//Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista tridimensional matriz criada anteriormente.

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

matriz[2].push(15)
console.log(matriz)