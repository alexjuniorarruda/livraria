const express = require("express");
const swaggerUi = require("swagger-ui-express");
const conn = require("./src/db/conn");
const swaggerDocs = require("./swagger.json");
const app = express();
const port = 3000;

// Models
const Assunto = require("./src/models/Assunto");
const Autor = require("./src/models/Autor");
const Livro = require("./src/models/Livro");
const AssuntoLivro = require("./src/models/AssuntoLivro");
const AutorLivro = require("./src/models/AutorLivro");

// Routes
const assuntoRoutes = require("./src/routes/assuntoRoutes");
const autorRoutes = require("./src/routes/autorRoutes");
const livroRoutes = require("./src/routes/livroRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/assuntos", assuntoRoutes);
app.use("/autores", autorRoutes);
app.use("/livros", livroRoutes);

conn
    .sync({ force: false })
    .then(() => {
        app.listen(port)
    })
    .catch((err) => console.log(err));
