/*
Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

nome (string): Nome da pessoa.
idade (number): Idade da pessoa.
solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
hobbies (array): Lista de hobbies da pessoa.
Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
*/

const pessoa = {
    nome: 'Adailo',
    idade: 21,
    solteiro: true ? 'Solteiro' : 'Namorando ou Casado',
    hobbies: ['Leitura', 'Tocar violão', 'Jogar xadrez', 'Assistir animes', 'Jogar video game']
}

function mostrarInfoPessoa(obj){
    console.log(`Nome: ${obj.nome}\nIdade: ${obj.idade}\nEstado civil: ${obj.solteiro}\nHobbies: ${obj.hobbies}`)
}

mostrarInfoPessoa(pessoa)

