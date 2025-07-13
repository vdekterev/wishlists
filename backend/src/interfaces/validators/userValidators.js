const { body } = require('express-validator');

const validateRegister = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Поле email обязательно')
    .isEmail()
    .withMessage('Некорректный формат email'),

  body('name')
    .trim()
    .notEmpty()
    .withMessage('Поле name обязательно')
    .isString()
    .withMessage('Поле name должно соответствовать формату string')
    .isLength({ min: 3, max: 50 })
    .withMessage(
      'Поле name должно быть не менее 3 и не более 50 символов в длину',
    ),

  body('password')
    .notEmpty()
    .withMessage('Поле password обязательно')
    .isString()
    .withMessage('Поле password должно соответствовать формату string')
    .isLength({ min: 6, max: 50 })
    .withMessage(
      'Поле name должно быть не менее 8 и не более 50 символов в длину',
    ),
];

const validateLogin = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Поле email обязательно')
    .isEmail()
    .withMessage('Некорректный формат email'),

  body('password')
    .notEmpty()
    .withMessage('Поле password обязательно')
    .isString()
    .withMessage('Поле password должно соответствовать формату string')
    .isLength({ min: 6, max: 50 })
    .withMessage(
      'Поле name должно быть не менее 8 и не более 50 символов в длину',
    ),
];

module.exports = {
  validateRegister,
  validateLogin,
};
