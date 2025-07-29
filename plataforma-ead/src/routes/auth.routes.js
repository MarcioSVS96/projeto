const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const { validateLogin, validateRegister } = require('../validators/auth.validator');

router.post('/register', validateRegister, AuthController.register);
router.post('/login', validateLogin, AuthController.login);

module.exports = router;
