import livro from "../models/Livro"

class LivroController {
    
    static async listarLivros(req, res){
        const listaLivros = await livro.find({})
        res.status(200).json(listaLivros) //Não pode usar send() com dados como objetos
    }
}

export default LivroController