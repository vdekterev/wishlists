const validateRequest = require('./validateRequest');

/**
 * @param {Array} validators
 */
const withValidation = (validators = []) => {
  return [...validators, validateRequest];
};

module.exports = withValidation;
