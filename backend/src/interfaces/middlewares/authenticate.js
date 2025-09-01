const jwt = require('jsonwebtoken');
const ResponseError = require('../../domain/errors/ResponseError');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @throws {ResponseError}
 * */
const authenticate = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    throw new ResponseError('Unauthorized', 401);
  }

  const token = auth.split(' ')[1];

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret');
    next();
  } catch (err) {
    throw new ResponseError('Invalid or expired token', 403);
  }
};

module.exports = authenticate;
