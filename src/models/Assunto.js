const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const Assunto = db.define("Assunto", {
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Assuntos",
    timestamps: true
});

module.exports = Assunto;