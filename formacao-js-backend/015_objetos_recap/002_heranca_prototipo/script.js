const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
      console.log(this.nome)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'm@m.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true,
    criarCurso(){
        console.log('Curso criado')
    }
}

Object.setPrototypeOf(admin, user) //Admin usa como protótipo o objeto user
admin.criarCurso() //Curso criado (Função de admin)
admin.exibirInfos() //Mariana (Função de user)