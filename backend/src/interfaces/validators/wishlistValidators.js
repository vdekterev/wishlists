const { body, param } = require('express-validator');

const validateGetOneWishlist = [
  param('id')
    .notEmpty()
    .withMessage('Поле id обязательно')
    .isUUID()
    .withMessage('Поле id должно соответствовать формату uuid'),
];

const validateCreateWishlist = [
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

  body('isPublic')
    .optional()
    .isBoolean()
    .withMessage('Поле isPublic должно иметь тип boolean'),
];

const validateUpdateWishlist = [
  param('id')
    .notEmpty()
    .withMessage('Поле id обязательно')
    .isUUID()
    .withMessage('Поле id должно соответствовать формату uuid'),

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
  body('isPublic')
    .optional()
    .isBoolean()
    .withMessage('Поле isPublic должно иметь тип boolean'),
];

const validateDeleteWishlist = [
  param('id')
    .notEmpty()
    .withMessage('Поле id обязательно')
    .isUUID()
    .withMessage('Поле id должно соответствовать формату uuid'),
];

module.exports = {
  validateGetOneWishlist,
  validateCreateWishlist,
  validateUpdateWishlist,
  validateDeleteWishlist,
};
