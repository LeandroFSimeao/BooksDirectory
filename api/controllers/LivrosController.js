const database = require("../models");

class LivroController {

    static async pegaTodosOsLivros(req, res){
        try{
            const todosOsLivros = await database.Livros.findAll();
            return res.status(200).json(todosOsLivros);
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmLivro(req, res){
        const {id} = req.params
        try{
            const umLivro = await database.Livros.findOne( { where: {
                id: Number(id)
            }
        });
        return res.status(200).json(umLivro);
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaLivro(req, res){
        const novoLivro = req.body;
        try{
            const novoLivroCriado = await database.Livros.create(novoLivro);
            return res.status(200).json(novoLivroCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaLivro(req, res){
        const novasInfos = req.body;
        const {id} = req.params;

        try{
            await database.Livros.update(novasInfos, {where: { id: Number(id) }});
            const livroAtualizado = await database.Livros.findOne( { where: {id: Number(id)}});
            return res.status(200).json(livroAtualizado);
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deletaLivro(req, res) {
        const {id} = req.params;
        try{
            await database.Livros.destroy( { where: {id: Number(id)}} );
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch(error){
            return res.status(500).json(error.message);
        }
    }

}

module.exports = LivroController;