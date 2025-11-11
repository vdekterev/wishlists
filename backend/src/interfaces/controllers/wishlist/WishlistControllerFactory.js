const { PrismaClient } = require('@prisma/client');
const PrismaWishlistRepository = require('../../../infrastructure/repositories/PrismaWishlistRepository');

// Prisma
const prisma = new PrismaClient();
const wishlistRepo = new PrismaWishlistRepository(prisma);

// Controllers
const getAllWishlistsController = require('./GetAllWishlistsController');
const getOneWishlistController = require('./GetOneWishlistController');
const createWishlistController = require('./CreateWishlistController');
const updateWishlistController = require('./UpdateWishlistController');
const deleteWishlistController = require('./DeleteWishlistController');

// Usecases
const GetAllWishlistsUsecase = require('../../../application/usecases/wishlist/GetAllWishlistsUsecase');
const GetOneWishlistUsecase = require('../../../application/usecases/wishlist/GetOneWishlistUsecase');
const CreateWishlistUsecase = require('../../../application/usecases/wishlist/CreateWishlistUsecase');
const UpdateWishlistUsecase = require('../../../application/usecases/wishlist/UpdateWishlistUsecase');
const DeleteWishlistUsecase = require('../../../application/usecases/wishlist/DeleteWishlistUsecase');

module.exports = {
  getAllWishlists: getAllWishlistsController(
    new GetAllWishlistsUsecase(wishlistRepo),
  ),
  getOneWishlist: getOneWishlistController(
    new GetOneWishlistUsecase(wishlistRepo),
  ),
  createWishlist: createWishlistController(
    new CreateWishlistUsecase(wishlistRepo),
  ),
  updateWishlist: updateWishlistController(
    new UpdateWishlistUsecase(wishlistRepo),
  ),
  deleteWishlist: deleteWishlistController(
    new DeleteWishlistUsecase(wishlistRepo),
  ),
};
