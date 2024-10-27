const pessoa = {
    nome: "José Silva",
    idade: 32,
    cpf: "12312312312",
    turma: "JavaScript",
    bolsista: false,
    telefones: [ "551199999998", "551199999993" ],
    endereco: [
        { rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43' },
        { rua: 'Rua Dona Clotilde', numero: '71', complemento: '' }
    ]
}

console.log(pessoa.endereco[0].complemento) //apto 43
console.log(pessoa.endereco[1].rua) //Rua Dona Clotilde