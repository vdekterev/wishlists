const validateRequest = require('./validateRequest');

/**
 * @param {Array<import('express-validator').ValidationChain>} validators
 * @returns {Array<Function>}
 * */
const withValidation = (validators = []) => {
  return [...validators, validateRequest];
};

module.exports = withValidation;
