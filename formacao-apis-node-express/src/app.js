import express from "express"
import conectaDB from "./config/dbconnect.js"

const conexao = await conectaDB()

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express()
app.use(express.json())

function buscaLivro(id){
    return livros.findIndex(livro => livro.id === Number(id))
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS")
})

app.get("/livros", (req, res) => { 
    res.status(200).json(livros) //Não pode usar send() com dados como objetos
})

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].nome = req.body.nome
    res.status(200).json(livros)
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("Livro removido com sucesso")
})

export default app

