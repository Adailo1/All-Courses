import livro from "../models/Livro.js"

class LivroController {
    
    static async listarLivros(req, res){
        try{
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros) //Não pode usar send() com dados como objetos
        } catch (erro){
            res.status(500).json({ message: `${erro.message} falha na requisição do livro` })
        }
    }

    static async listarLivroPorId(req, res){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById({id})
            res.status(201).json(livroEncontrado) //Não pode usar send() com dados como objetos
        } catch (erro){
            res.status(500).json({ message: `${erro.message} falha na requisição do livro` })
        }
    }

    static async cadastrarLivro(req, res){
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json( { message: "Livro criado com sucesso", livro: novoLivro } )
        } catch(erro){
            res.status(500).json( { message: `${erro.message} - falha ao cadastrar livro` } )
        }
    }

    static async atualizarLivro(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(201).json({ message: "Livro atualizado" }) //Não pode usar send() com dados como objetos
        } catch (erro){
            res.status(500).json({ message: `${erro.message} falha na atualização do livro` })
        }
    }

    static async excluirLivro(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id, req.body)
            res.status(200).json({ message: "Livro excluido com sucesso" }) //Não pode usar send() com dados como objetos
        } catch (erro){
            res.status(500).json({ message: `${erro.message} falha na exclusão do livro` })
        }
    }
}

export default LivroController