import autor from "../models/Autor.js"

class AutorController {

    static async listarAutores(req, res){
        try{
            const listaAutor = await autor.find({})
            res.status(200).json(listaAutor)
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` })
        }
    }

    static async listarAutorPorId(req, res){
        try{
            const id = req.params.id
            const autorEncontrado = await autor.findById({id})
            res.status(201).json(autorEncontrado)
        } catch (erro){
            res.status(500).json({ message: `${erro.message} falha na requisição do autor` })
        }
    }

    static async cadastrarAutor(req, res){
        try{
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ message: "Autor cadastrado com sucesso", autor: novoAutor })
        } catch(erro){
            res.status(500).json({ message: `${erro.message} falha ao cadastrar autor` })
        }
    }

    static async autualizarAutor(req, res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(201).json({ message: "Autor atualizado com sucesso" })
        } catch(erro){
            res.status(500).json({ message: `${erro.message} falha na atualização do autor` })
        }
    }

    static async excluirAutor(req, res){
        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id, req.body)
            res.status(200).json({ message: "Autor excluido com sucesso "})
        } catch (erro){
            res.status(500).json({ message: `${erro.message} falha na exclusão do autor` })
        }
    }
}

export default AutorController