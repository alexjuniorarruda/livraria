const { body } = require("express-validator");

exports.validar =
[
    body("descricao")
        .isString()
        .withMessage("Valor inválido!")
        .notEmpty()
        .withMessage("Descrição não pode ficar vazio!")
]
