const { body } = require("express-validator");

exports.validar = 
[
    body("titulo")
        .isString()
        .withMessage("Valor inválido!")
        .notEmpty()
        .withMessage("O título não pode estar vazio!"),
    body("isbn")
        .isString()
        .withMessage("Valor inválido!")
        .notEmpty()
        .withMessage("Código ISBN obrigatório!"),
    body("preco_unitario")
        .isDecimal()
        .withMessage("Valor inválido!")
        .notEmpty()
        .withMessage("Informe o preço do livro!")
]