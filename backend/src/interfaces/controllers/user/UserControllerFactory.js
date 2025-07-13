const { PrismaClient } = require('@prisma/client');
const PrismaUserRepository = require('../../../infrastructure/repositories/PrismaUserRepository');

// Services
const RegisterUserService = require('../../../application/services/user/RegisterUserService');
const LoginUserService = require('../../../application/services/user/LoginUserService');

// Controllers
const registerController = require('./RegisterUserController');
const loginController = require('./LoginUserController');

// Prisma
const prisma = new PrismaClient();
const repo = new PrismaUserRepository(prisma);

// Usecases
const registerUserUsecase = new RegisterUserService(repo);
const loginUserUsecase = new LoginUserService(repo);

module.exports = {
  registerUser: registerController(registerUserUsecase),
  loginUser: loginController(loginUserUsecase),
};
