const express = require("express");
const router = express.Router();
const relatorioLivro = require("../helpers/relatorioLivro");

const LivroController = require("../controllers/LivroController");

// validações
const handleValidacao = require("../middleware/handleValidacao");
const livroValidacao = require("../middleware/livroValidacao");

router.get("/relatorio", relatorioLivro.gerarRelatorio);
router.post("/", livroValidacao.validar, handleValidacao.validar, LivroController.create);
router.get("/", LivroController.index);
router.get("/:id", LivroController.buscarPorId);
router.put("/:id", livroValidacao.validar, handleValidacao.validar, LivroController.update);
router.delete("/:id", LivroController.delete);

module.exports = router;