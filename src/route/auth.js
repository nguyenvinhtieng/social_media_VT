const express = require('express');
const router = express.Router()

const AuthController = require('../app/controllers/AuthController')
router.post('/login', AuthController.LoginHandler);
router.post('/register', AuthController.RegisterHandler);

module.exports = router