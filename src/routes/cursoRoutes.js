const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');
const { verifyToken, requireRole } = require('../middlewares/authMiddleware');
const { body } = require('express-validator');

router.post('/',
  verifyToken,
  requireRole(['INSTRUTOR']),
  body('titulo').notEmpty(),
  body('descricao').notEmpty(),
  cursoController.createCurso
);

router.get('/', cursoController.getCursos);
router.get('/:id', cursoController.getCursoById);

module.exports = router;