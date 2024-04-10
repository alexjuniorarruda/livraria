const db = require("../db/conn");
const Autor = require("./Autor");
const Livro = require("./Livro");

const AutorLivro = db.define("AutorLivro", {}, { tableName: "autor_livro", timestamps: false });

Autor.belongsToMany(Livro, { through: AutorLivro, foreignKey: "autor_id" });
Livro.belongsToMany(Autor, { through: AutorLivro, foreignKey: "livro_id" });

module.exports = AutorLivro;