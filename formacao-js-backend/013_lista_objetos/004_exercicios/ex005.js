/*
Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do departamento.
nome (string): nome do departamento.
funcionarios (array): array de objetos representando funcionários do departamento.

Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento.

Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado.
*/

const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(id){
    departamentos.filter(value => {
        value.funcionarios.filter(funcionario => {
            if (funcionario.id === id) console.log(funcionario)
        })
    })
}

encontrarFuncionarioPorId(201)