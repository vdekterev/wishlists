const { PrismaClient } = require('@prisma/client');
const PrismaUserRepository = require('../../../infrastructure/repositories/PrismaUserRepository');

// Services
const RegisterUserService = require('../../../application/services/user/RegisterUserService');
const LoginUserService = require('../../../application/services/user/LoginUserService');
const MeUserService = require('../../../application/services/user/MeUserService');

// Controllers
const registerController = require('./RegisterUserController');
const loginController = require('./LoginUserController');
const meController = require('./MeUserController');

// Prisma
const prisma = new PrismaClient();
const repo = new PrismaUserRepository(prisma);

// Usecases
const registerUserUsecase = new RegisterUserService(repo);
const loginUserUsecase = new LoginUserService(repo);
const meUserUsecase = new MeUserService(repo);

module.exports = {
  registerUser: registerController(registerUserUsecase),
  loginUser: loginController(loginUserUsecase),
  meUser: meController(meUserUsecase),
};
