//Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

let nome = 'Adailo'
let logado = true
let permissao = true

if (logado === true && permissao === true){
    console.log("Você está logado e tem a permissão de administrador")
} else if (logado === false && permissao === false) {
    console.log("Você não está logado, e não tem permissão de administrador")
} else {
    console.log(logado ? "Você não tem permissão de administrador" : "Você não está logado")
}