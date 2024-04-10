const express = require("express");
const AssuntoController = require("../controllers/AssuntoController");

// validations
const handleValidacao = require("../middleware/handleValidacao");
const assuntoValidacao = require("../middleware/assuntoValidacao");

const router = express.Router();

router.get("/", AssuntoController.index);
router.get("/:id", AssuntoController.buscarPorId);
router.post("/", assuntoValidacao.validar, handleValidacao.validar, AssuntoController.create);
router.put("/:id", assuntoValidacao.validar, handleValidacao.validar, AssuntoController.update);
router.delete("/:id", AssuntoController.delete);

module.exports = router;