const { Sequelize } = require("sequelize");
require("dotenv").config();
const dbConfig = require("../config/database")

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});

try {
    sequelize.authenticate();
    console.log("Banco de dados conectado!");
} catch (error) {
    console.error(`Não foi possível conectar ao banco: ${error}`);
}

module.exports = sequelize;