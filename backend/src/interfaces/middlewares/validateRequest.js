const { validationResult } = require('express-validator');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(errors.array());
  }

  next();
};

module.exports = validateRequest;
