import http from 'http' //HyperText transfer protocol

const PORT = 3000

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
}

const server = http.createServer((req, res) => {//Requisição e Resposta
    res.writeHead(200, { "Content-Type": "text/plain"}) //Header (HTTP)
    res.end(rotas[req.url]) //
})

server.listen(PORT, () => {
    console.log("Servidor escutando")
})
