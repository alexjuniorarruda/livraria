const express = require("express");
const router = express.Router();
const AutorController = require("../controllers/AutorController");

// validações
const handleValidacao = require("../middleware/handleValidacao");
const autorValidacao = require("../middleware/autorValidacao");

router.get("/", AutorController.index);
router.get("/:id", AutorController.buscarPorId);
router.post("/", autorValidacao.validar, handleValidacao.validar, AutorController.create);
router.put("/:id", autorValidacao.validar, handleValidacao.validar, AutorController.update);
router.delete("/:id", AutorController.delete);

module.exports = router;

