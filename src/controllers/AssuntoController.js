const Assunto = require("../models/Assunto");
const consultaAssunto = require("../helpers/consultaAssunto");

module.exports = class AssuntoController {
    static async index(req, res) {
        await Assunto.findAll()
            .then((result) => res.status(200).json(result))
            .catch((error) => res.status(400).json(error));
    }

    static async buscarPorId(req, res) {
        const id = req.params.id;

        if (id === "") {
            return res.status(404).json("Informe o assunto!");
        }

        const assunto = await consultaAssunto.consultar(id, res);

        return res.status(200).json(assunto);
    }

    static async create(req, res) {

        const assunto = {
            descricao: req.body.descricao
        };

        await Assunto
            .create({ descricao: assunto.descricao })
            .then((result) => res.status(201).json(result))
            .catch((error) => res.status(400).json(error));
    }

    static async update(req, res) {
        const id = req.params.id;

        if (id === "") {
            return res.status(404).json("Informe o assunto a ser editado!");
        }

        await consultaAssunto.consultar(id, res);

        await Assunto.update({ descricao: req.body.descricao }, {
            where: {
                id: id
            }
        });

        await consultaAssunto.consultar(id, res)
            .then((result) => res.status(200).json(result))
            .catch((error) => res.status(400).json(error));
    }

    static async delete(req, res) {
        const id = req.params.id;

        if (id === "") {
            return res.status(404).json("Informe o assunto a ser excluído!");
        }

        const assuntoDelete = await Assunto.destroy({
            where: {
                id: id
            }
        });

        if (assuntoDelete == 1) {
            return res.status(200).json("Assunto excluído com sucesso!");
        } else {
            return res.status(400).json("Não foi possível excluir o assunto!");
        }
    }
}