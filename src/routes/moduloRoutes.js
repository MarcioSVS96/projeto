const express = require('express');
const router = express.Router();
const moduloController = require('../controllers/moduloController');
const { verifyToken, requireRole } = require('../middlewares/authMiddleware');
const { body } = require('express-validator');

router.post('/',
  verifyToken,
  requireRole(['INSTRUTOR']),
  body('titulo').notEmpty(),
  body('videoUrl').isURL(),
  body('cursoId').isInt(),
  moduloController.createModulo
);

router.get('/curso/:cursoId', moduloController.getModulosByCurso);

module.exports = router;
