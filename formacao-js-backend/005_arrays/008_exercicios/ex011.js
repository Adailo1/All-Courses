//Acesse e imprima o elemento na segunda linha e terceira coluna da lista tridimensional matriz criada no exercício anterior.

let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
matriz.forEach(row => console.log(row)); // visualização em linhas e colunas
console.log(`Elemento na segunda linha, terceira coluna: ${matriz[1][2]}`)