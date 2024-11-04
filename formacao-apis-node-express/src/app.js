import express from "express"

const app = express()

const livros = [
    { id: 1, nome: 'Percy Jackson' },
    { id: 2, nome: 'Meu sol de primavera' }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros) //Não pode usar send() com dados como objetos
})

export default app