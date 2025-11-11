const { PrismaClient } = require('@prisma/client');
const PrismaUserRepository = require('../../../infrastructure/repositories/PrismaUserRepository');

// Prisma
const prisma = new PrismaClient();
const userRepo = new PrismaUserRepository(prisma);

// Controllers
const registerController = require('./RegisterUserController');
const loginController = require('./LoginUserController');
const meController = require('./MeUserController');

// Usecases
const RegisterUserUsecase = require('../../../application/usecases/user/RegisterUserUsecase');
const LoginUserUsecase = require('../../../application/usecases/user/LoginUserUsecase');
const MeUserUsecase = require('../../../application/usecases/user/MeUserUsecase');

module.exports = {
  registerUser: registerController(new RegisterUserUsecase(userRepo)),
  loginUser: loginController(new LoginUserUsecase(userRepo)),
  meUser: meController(new MeUserUsecase(userRepo)),
};
