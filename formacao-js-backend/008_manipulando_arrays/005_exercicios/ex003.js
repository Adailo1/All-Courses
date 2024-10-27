//Considere duas listas de cores:

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
//Crie um programa que une essas duas listas, removendo cores duplicadas e exiba a lista final.

const setTotalCores = new Set([...coresLista1, ...coresLista2])
const listaTotalCores = [...setTotalCores]

console.log(listaTotalCores)