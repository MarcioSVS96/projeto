const express = require('express');
const courseController = require('../controllers/courseController');
const { verifyToken, checkRole } = require('../middlewares/authMiddleware');

const router = express.Router();

// Protegendo a rota: precisa de token válido e perfil 'instructor' ou 'admin'
router.post('/', [verifyToken, checkRole(['instructor', 'admin'])], courseController.createCourse);

module.exports = router;