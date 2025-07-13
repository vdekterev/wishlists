const { PrismaClient } = require('@prisma/client');
const PrismaWishlistRepository = require('../../infrastructure/repositories/PrismaWishlistRepository');

// Services
const GetAllWishlistsService = require('../../application/services/GetAllWishlistsService');
const GetOneWishlistService = require('../../application/services/GetOneWishlistService');
const CreateWishlistService = require('../../application/services/CreateWishlistService');
// const UpdateWishlistService = require('../../application/services/CreateWishlistService');
// const DeleteWishlistService = require('../../application/services/CreateWishlistService');

// Controllers
const getAllWishlistsController = require('./GetAllWishlistsController');
const getOneWishlistController = require('./GetOneWishlistController');
const createWishlistController = require('./CreateWishlistController');

// Prisma
const prisma = new PrismaClient();
const repo = new PrismaWishlistRepository(prisma);

// Usecases
const getAllWishlistsUsecase = new GetAllWishlistsService(repo);
const getOneWishlistUsecase = new GetOneWishlistService(repo);
const createWishlistUsecase = new CreateWishlistService(repo);

module.exports = {
  getAllWishlists: getAllWishlistsController(getAllWishlistsUsecase),
  getOneWishlist: getOneWishlistController(getOneWishlistUsecase),
  createWishlist: createWishlistController(createWishlistUsecase),
};
