const { PrismaClient } = require('@prisma/client');
const PrismaWishlistRepository = require('../../infrastructure/repositories/PrismaWishlistRepository');

// Services
// const GetAllWishlistsService = require('../../application/services/CreateWishlistService');
const GetOneWishlistService = require('../../application/services/GetOneWishlistService');
const CreateWishlistService = require('../../application/services/CreateWishlistService');
// const UpdateWishlistService = require('../../application/services/CreateWishlistService');
// const DeleteWishlistService = require('../../application/services/CreateWishlistService');

// Controllers
const createWishlistController = require('./CreateWishlistController');
const getOneWishlistController = require('./GetOneWishlistController');

// Prisma
const prisma = new PrismaClient();
const repo = new PrismaWishlistRepository(prisma);

// Usecases
const getOneWishlistUsecase = new GetOneWishlistService(repo);
const createWishlistUsecase = new CreateWishlistService(repo);

module.exports = {
  getOneWishlist: getOneWishlistController(getOneWishlistUsecase),
  createWishlist: createWishlistController(createWishlistUsecase),
};
