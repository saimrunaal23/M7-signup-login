const express = require('express');
const viewsController = require('../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
.get('/',viewsController.getLandingPAge);

router
.get('/login',viewsController.getLoginForm)
.post('/login',authController.login);

router
.get('/signIn',viewsController.getSignInForm)
.post('/signIn',authController.signup);


router
.get('/users', viewsController.getusers)
module.exports = router;
