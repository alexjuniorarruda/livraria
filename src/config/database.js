require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

module.exports = {
    dialect: "mysql",
    host: dbHost,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    define: {
        timestamps: true,
        underscored: true
    }
}