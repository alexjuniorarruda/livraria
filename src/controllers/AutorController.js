const Autor = require("../models/Autor");
const consultaAutor = require("../helpers/consultaAutor");

module.exports = class AutorController {
    static async index(req, res) {
        const autores = await Autor.findAll();

        if (autores.length === 0) {
            return res.status(404).json("Nenhum autor encontrado!");            
        }

        return res.json(autores);
    }

    static async buscarPorId(req, res) {
        const id = req.params.id;

        if (id === "") {
            return res.status(404).json("Por favor informe um id!");            
        }

        const autor = await consultaAutor.consultar(id, res);

        return res.status(200).json(autor);

    }

    static async create(req, res) {

        await Autor.create({
            nome: req.body.nome
        })
            .then((result) => res.status(200).json(result))
            .catch((error) => res.status(400).json(error));

    }

    static async update(req, res) {
        const id = req.params.id;

        if (id === "") {
            return res.status(404).json("Autor ão informado!");            
        }

        await consultaAutor.consultar(id, res);

        const updatedAutor = await Autor.update({ nome: req.body.nome }, {
            where: {
                id: id
            }
        });   
        
        if (updatedAutor == 1) {
            return res.status(200).json("Autor atualizado com sucesso!");            
        } else {
            return res.status(400).json("Não foi possível atualizar o autor!");
        }
        
    }

    static async delete(req, res) {

        const id = req.params.id;

        if (id === "") {
            return res.status(404).json("Autor não informado!");            
        }

        const autorDelete = await Autor.destroy({
            where: {
                id: id
            }
        });

        if (autorDelete == 1) {
            return res.status(200).json("Autor excluído com sucesso!");
        } else {
            return res.status(400).json("Não foi possível excluir o autor!");
        }
    }
}