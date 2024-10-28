/*
Crie um objeto chamado contaBancaria


Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
*/

let contaBancaria = {
    titular: 'Roger',
    saldo: 0,

    depositar(valor){
        this.saldo += valor
        console.log('Depósito realizado com sucesso')
    },

    sacar(valor){
        if (valor <= this.saldo){
            this.saldo -= valor
            console.log('Saque concluido com sucesso')
        } else {
            console.log('Você não tem saldo o suficiente para esse saque')
        }
    }


}

const cliente = {
    nome: 'Roger',
    conta: contaBancaria,
    mostrarSaldo(){
        console.log(`Nome: ${this.nome}\nSaldo: ${this.conta.saldo}`)
    }
}

cliente.conta.depositar(1500) //Depósito realizado com sucesso (Depósito inicial)
cliente.mostrarSaldo() //1500
cliente.conta.sacar(700) //Saque concluido com sucesso
cliente.mostrarSaldo() //800
cliente.conta.sacar(850) //Você não tem saldo o suficiente para esse saque
cliente.mostrarSaldo() //800
cliente.conta.depositar(2600) //Depósito realizado com sucesso
cliente.mostrarSaldo() //3400