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
}

module.exports = LivroController;