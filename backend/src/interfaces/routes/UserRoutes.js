const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require('../controllers/user/UserControllerFactory');

const {
  validateRegister,
  validateLogin,
} = require('../../interfaces/validators/userValidators');

const withValidation = require('../../interfaces/middlewares/withValidation');

router.post('/register', withValidation(validateRegister), registerUser);
router.post('/login', withValidation(validateLogin), loginUser);

module.exports = router;
