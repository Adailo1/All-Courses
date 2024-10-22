if (1 > 0){
    let student = 'Caroline'//Por ter sido criada com let, não é acessível fora do escopo do bloco condicional
    console.log(student)
}

student = 'Ana' //Quando você cria uma variável sem urar var, let ou const, secretamente o JS considera que tem um var aqui 

console.log(student) //A variável criada dentro de um bloco, só existe dentro do bloco, aqui a variável é a que foi criada fora, inclusive se você não criar ela vai dar erro, mesmo tendo uma com o mesmo nome dentro do bloco

//Por causa do escopo do bloco, agora tem duas variáveis na memória chamadas student, uma com let, e uma com var