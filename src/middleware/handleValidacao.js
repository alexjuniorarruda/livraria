const { validationResult } = require("express-validator");

exports.validar = (req, res, next) => {
    const erros = validationResult(req);

    if (erros.isEmpty()) {
        return next();
    }

    const errosExtraidos = [];

    erros.array().map((err) => errosExtraidos.push({ [err.path]: err.msg }));

    return res.status(422).json({
        erros: errosExtraidos
    });
}
