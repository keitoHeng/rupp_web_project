const express = require('express');
const userCon = require('../controllers/userCon')
const router = express.Router();

router.get('/login', userCon.login);
router.get('/signup', userCon.signup);

module.exports = router;