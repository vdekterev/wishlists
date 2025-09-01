const validateRequest = require('./validateRequest');

/**
 * @param {Array<import('express-validator').ValidationChain>} validators
 * */
const withValidation = (validators = []) => {
  return [...validators, validateRequest];
};

module.exports = withValidation;
