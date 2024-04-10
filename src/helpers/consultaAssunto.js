const Assunto = require("../models/Assunto");

exports.consultar = async (id, res) => {

    const assuntos = [];

    if (typeof (id) === "object") {
        for (let i = 0; i < id.length; i++) {
            const assunto = await Assunto.findByPk(id[i]);

            if (assunto == null) {
                return res.status(404).json("Assunto não encontrado!");
            }

            assuntos.push(assunto);
        }
    } else {
        const assunto = await Assunto.findByPk(id);

        if (assunto == null) {
            return res.status(404).json("Assunto não encontrado!");
        }

        assuntos.push(assunto);
    }



    return assuntos;
}