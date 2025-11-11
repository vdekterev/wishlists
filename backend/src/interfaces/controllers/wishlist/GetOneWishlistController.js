const WishlistMapper = require('../../mappers/WishlistMapper');

/**
 * @param {GetOneWishlistUsecase} getWishlistUsecase
 */
const getOneWishlistController = getWishlistUsecase => async (req, res) => {
  const { id } = req.params;
  const wishlist = await getWishlistUsecase.process(id);
  res.status(200).json(WishlistMapper.toDTO(wishlist));
};

module.exports = getOneWishlistController;
