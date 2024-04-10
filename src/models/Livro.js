const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Livro = db.define("Livro", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precoUnitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: "preco_unitario"
    }
}, {
    tableName: "Livros",
    timestamps: true
});

module.exports = Livro;

