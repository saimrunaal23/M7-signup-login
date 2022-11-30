const express = require('express');
const loanController = require('../controllers/loanController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
.get('/profile', authController.protect, loanController.getAllloans) ;


router
.get('/loan', authController.protect, loanController.getloan)
.post('/loan',authController.protect, loanController.createloan);

router
.get('/loans', loanController.getloans)

module.exports = router;
