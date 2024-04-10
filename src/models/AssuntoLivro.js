const db = require("../db/conn");
const Assunto = require("./Assunto");
const Livro = require("./Livro");

const AssuntoLivro = db.define("AssuntoLivro", {}, { tableName: "assunto_livro", timestamps: false });

Assunto.belongsToMany(Livro, { through: AssuntoLivro, foreignKey: "assunto_id" });
Livro.belongsToMany(Assunto, { through: AssuntoLivro, foreignKey: "livro_id" });

module.exports = AssuntoLivro;