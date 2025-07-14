const { body } = require('express-validator');

const validateRegister = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email обязателен')
    .isEmail()
    .withMessage('Некорректный формат email'),

  body('name')
    .trim()
    .notEmpty()
    .withMessage('Имя обязательно')
    .isLength({ min: 3, max: 50 })
    .withMessage('Имя должно быть не менее 3 и не более 50 символов в длину'),

  body('password')
    .notEmpty()
    .withMessage('Пароль обязателен')
    .isLength({ min: 6, max: 50 })
    .withMessage(
      'Пароль должен быть не менее 8 и не более 50 символов в длину',
    ),
];

const validateLogin = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email обязателен')
    .isEmail()
    .withMessage('Некорректный формат email'),

  body('password')
    .notEmpty()
    .withMessage('Пароль обязателен')
    .isLength({ min: 6, max: 50 })
    .withMessage(
      'Пароль должен быть не менее 8 и не более 50 символов в длину',
    ),
];

module.exports = {
  validateRegister,
  validateLogin,
};
