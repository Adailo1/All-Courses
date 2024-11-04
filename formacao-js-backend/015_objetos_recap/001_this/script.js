const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos() {
      console.log(this.nome, this.email);
    }
}

user.exibirInfos() //Juliana j@j.com

const exibir = user.exibirInfos
exibir() //Undefined Undefined (A const exibir não tem acesso ao this do objeto, ela só copiou a função exibirInfos)

const exibirNome = exibir.bind(user) //Agora é possível usar o this, pois exibirNome está atrelado à função
exibirNome() // Juliana j@j.com