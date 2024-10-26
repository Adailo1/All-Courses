//Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.
const especifico = 'João'
const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

  const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB)
  const tamanhoTurma = todasAsTurmas.length - 1
  const alunoFimDaLista = todasAsTurmas[tamanhoTurma]
  let estado

  
  todasAsTurmas.find(nome => {
    if (nome.includes(especifico)){ 
      console.log(nome)
      estado = 'Achado'
    }
    else if (estado !== 'Achado' && alunoFimDaLista === nome) console.log('Aluno não encontrado')
  })