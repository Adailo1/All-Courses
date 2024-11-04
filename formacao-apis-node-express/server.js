import http from 'http' //HyperText transfer protocol

const PORT = 3000

const server = http.createServer((req, res) => {//Requisição e Resposta
    res.writeHead(200, { "Content-Type": "text/plain"}) //Header (HTTP)
    res.end("Curso de Node.JS") 
})

server.listen(PORT, () => {
    console.log("Servidor escutando")
})
