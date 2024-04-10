const { body } = require("express-validator");

exports.validar = 
[
    body("nome")
        .isString()
        .withMessage("Valor inválido!")
        .notEmpty()
        .withMessage("Nome não pode estar vazio!")
]