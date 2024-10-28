/*
Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

rua (string): nome da rua.
cidade (string): nome da cidade.
estado (string): nome do estado.
Preencha as subpropriedades do objeto endereco com valores fictícios.

Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
*/

const pessoa = {
    nome: 'Adailo',
    idade: 21,
    solteiro: true ? 'Solteiro' : 'Namorando ou Casado',
    hobbies: ['Leitura', 'Tocar violão', 'Jogar xadrez', 'Assistir animes', 'Jogar video game'],
    endereco: {
        rua: "Alguma rua",
        cidade: "Alguma cidade",
        estado: "Piauí"
    }
}

function mostrarInfoPessoa(obj){
    console.log(`Nome: ${obj.nome}\nIdade: ${obj.idade}\nEstado civil: ${obj.solteiro}\nHobbies: ${obj.hobbies}\nEndereço: Rua ${obj.endereco.rua}, ${obj.endereco.cidade} - ${obj.endereco.estado}`)
}

mostrarInfoPessoa(pessoa)