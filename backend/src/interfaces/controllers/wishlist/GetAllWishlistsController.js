const WishlistMapper = require('../../mappers/WishlistMapper');

/**
 * @param {GetAllWishlistsService} getWishlistUsecase
 * */
const getAllWishlistsController = getWishlistUsecase => async (req, res) => {
  const wishlists = await getWishlistUsecase.execute();

  const mapped = wishlists.map(wishlist => WishlistMapper.toDTO(wishlist));

  res.status(200).json(mapped);
};

module.exports = getAllWishlistsController;
