//const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'], Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
frutas.splice(2, 2, 'Kiwi', 'Pêssego') //[ 'Maçã', 'Banana', 'Kiwi', 'Pêssego', 'Abacaxi' ]
console.log(frutas)