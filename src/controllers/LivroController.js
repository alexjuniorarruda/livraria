const Livro = require("../models/Livro");
const Assunto = require("../models/Assunto");
const Autor = require("../models/Autor");
const AssuntoLivro = require("../models/AssuntoLivro");
const AutorLivro = require("../models/AutorLivro");
const consultaAssunto = require("../helpers/consultaAssunto");
const consultaAutor = require("../helpers/consultaAutor");

module.exports = class LivroController {
    static async create(req, res) {

        // Verifica se o Assuto existe na tabela "assuntos"
        const assunto = await consultaAssunto.consultar(req.body.assunto, res);

        // Verifica se o Autor exsiste na tabela "autores"
        const autor = await consultaAutor.consultar(req.body.autor, res);

        // Cadastra Livro e os relacionamentos
        const livro = await Livro.create({
            titulo: req.body.titulo,
            isbn: req.body.isbn,
            precoUnitario: req.body.preco_unitario
        });

        for (let i = 0; i < assunto.length; i++) {
            await AssuntoLivro.create({
                assunto_id: assunto[i].id,
                livro_id: livro.id
            })
        }

        for (let i = 0; i < autor.length; i++) {
            await AutorLivro.create({
                autor_id: autor[i].id,
                livro_id: livro.id
            })
        }

        return res.status(201).json("Livro cadastrado com sucesso!");

    }

    static async index(req, res) {
        await Livro.findAll({
            include: [
                {
                    model: Assunto,
                    attributes: ["id", "descricao"],
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Autor,
                    attributes: ["id", "nome"],
                    through: {
                        attributes: []
                    }
                }
            ]
        })
            .then((resut) => res.status(200).json(resut))
            .catch((error) => res.status(400).json(error));
    }

    static async buscarPorId(req, res) {
        const id = req.params.id;

        if (!id) {
            return res.status(404).json("Informe um livro!");
        }

        const livro = await Livro.findByPk(id, {
            include: [
                {
                    model: Assunto,
                    attributes: ["id", "descricao"],
                    through: {
                        attributes: []
                    }
                },
                {
                    model: Autor,
                    attributes: ["id", "nome"],
                    through: {
                        attributes: []
                    }
                }
            ]
        });

        if (!livro) {
            return res.status(404).json("Livro não encontrado!");
        }

        return res.status(200).json(livro);
    }

    static async update(req, res) {
        const livroId = req.params.id;

        // Verifica se o Assuto existe na tabela "assuntos"
        const assunto = await consultaAssunto.consultar(req.body.assunto, res);

        // Verifica se o  Autor exsiste na tabela "autores"
        const autor = await consultaAutor.consultar(req.body.autor, res);

        const assuntoDelete = await AssuntoLivro.destroy({
            where: {
                livro_id: livroId
            }
        });

        if (assuntoDelete === 0) {
            return res.status(400).json("Não foi possível concluir a operação!");
        }

        for (let i = 0; i < assunto.length; i++) {
            await AssuntoLivro.create({
                assunto_id: assunto[i].id,
                livro_id: livroId
            })
        }

        const autorDelete = await AutorLivro.destroy({
            where: {
                livro_id: livroId
            }
        });

        if (autorDelete === 0) {
            return res.status(400).json("Não foi possível concluir a operação!");
        }

        for (let i = 0; i < autor.length; i++) {
            await AutorLivro.create({
                autor_id: autor[i].id,
                livro_id: livroId
            })
        }

        await Livro.update({
            titulo: req.body.titulo,
            isbn: req.body.isbn,
            precoUnitario: req.body.preco_unitario
        }, {
            where: {
                id: livroId
            }
        });

        return res.status(200).json("Livro atualizado com sucesso!");

    }

    static async delete(req, res) {
        
        const id = req.params.id;

        if (!id) {
            return res.status(404).json("Informe um livro!");
        }

        const livroDelete = await Livro.destroy({
            where: {
                id: id
            }
        });

        if (livroDelete != 1) {
            return res.status(400).json("Erro ao excluir o livro!");
        }

        return res.status(200).json("Livro excluído com sucesso!");
    }
}