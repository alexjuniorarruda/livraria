const { DataTypes } = require("sequelize");
const db = require("../db/conn");
const Livro = require("./Livro");

const Autor = db.define("Autor", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Autores",
    timestamps: true
});

Autor.belongsToMany(Livro, { through: "Autor_Livro", timestamps: false, foreignKey: "autor_id" });
Livro.belongsToMany(Autor, { through: "Autor_Livro", timestamps: false, foreignKey: "livro_id" });

module.exports = Autor;