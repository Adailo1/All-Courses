const pessoa = {
    nome: "José Silva",
    idade: 32,
    cpf: "12312312312",
    turma: "JavaScript",
    bolsista: false,
    telefones: [ "551199999998", "551199999993" ],
    media: 7.5, 
    estaAprovado(mediaBase){
        return this.media >= mediaBase ? "Está aprovado" : "Está reprovado"
    }
}

console.log(pessoa.estaAprovado(7))