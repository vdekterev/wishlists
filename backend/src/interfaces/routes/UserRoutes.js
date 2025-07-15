const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');

const {
  registerUser,
  loginUser,
  meUser,
} = require('../controllers/user/UserControllerFactory');

const {
  validateRegister,
  validateLogin,
} = require('../../interfaces/validators/userValidators');

const withValidation = require('../../interfaces/middlewares/withValidation');

router.post('/register', withValidation(validateRegister), registerUser);
router.post('/login', withValidation(validateLogin), loginUser);
router.get('/me', authenticate, meUser);

module.exports = router;
