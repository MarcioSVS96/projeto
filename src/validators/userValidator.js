const { body, validationResult } = require('express-validator');

const createUserValidationRules = () => {
  return [
    body('email').isEmail().withMessage('Forneça um e-mail válido.'),
    body('name').notEmpty().withMessage('O nome é obrigatório.'),
    body('password').isLength({ min: 6 }).withMessage('A senha precisa ter no mínimo 6 caracteres.'),
    body('role').isIn(['instructor', 'student']).withMessage('O perfil deve ser instrutor ou aluno.'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(422).json({ errors: errors.array() });
};

module.exports = { createUserValidationRules, validate };