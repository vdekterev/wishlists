const { PrismaClient } = require('@prisma/client');
const PrismaWishlistRepository = require('../../../infrastructure/repositories/PrismaWishlistRepository');

// Services
const GetAllWishlistsService = require('../../../application/services/wishlist/GetAllWishlistsService');
const GetOneWishlistService = require('../../../application/services/wishlist/GetOneWishlistService');
const CreateWishlistService = require('../../../application/services/wishlist/CreateWishlistService');
const UpdateWishlistService = require('../../../application/services/wishlist/UpdateWishlistService');
const DeleteWishlistService = require('../../../application/services/wishlist/DeleteWishlistService');

// Controllers
const getAllWishlistsController = require('./GetAllWishlistsController');
const getOneWishlistController = require('./GetOneWishlistController');
const createWishlistController = require('./CreateWishlistController');
const updateWishlistController = require('./UpdateWishlistController');
const deleteWishlistController = require('./DeleteWishlistController');

// Prisma
const prisma = new PrismaClient();
const repo = new PrismaWishlistRepository(prisma);

// Usecases
const getAllWishlistsUsecase = new GetAllWishlistsService(repo);
const getOneWishlistUsecase = new GetOneWishlistService(repo);
const createWishlistUsecase = new CreateWishlistService(repo);
const updateWishlistUsecase = new UpdateWishlistService(repo);
const deleteWishlistUsecase = new DeleteWishlistService(repo);

module.exports = {
  getAllWishlists: getAllWishlistsController(getAllWishlistsUsecase),
  getOneWishlist: getOneWishlistController(getOneWishlistUsecase),
  createWishlist: createWishlistController(createWishlistUsecase),
  updateWishlist: updateWishlistController(updateWishlistUsecase),
  deleteWishlist: deleteWishlistController(deleteWishlistUsecase),
};
