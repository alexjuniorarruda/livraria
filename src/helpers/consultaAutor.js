const Autor = require("../models/Autor");

exports.consultar = async (id, res) => {

    const autores = [];

    if (typeof (id) === "object") {
        for (let i = 0; i < id.length; i++) {

            const autor = await Autor.findByPk(id[i]);

            if (autor === null) {
                return res.status(404).json("Autor não encontrado!");
            }

            autores.push(autor);
        }
    } else {
        const autor = await Autor.findByPk(id);

        if (autor === null) {
            return res.status(404).json("Autor não encontrado!");
        }

        autores.push(autor);
    }

    return autores;
}