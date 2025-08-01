const WishlistMapper = require('../../mappers/WishlistMapper');

const getOneWishlistController = getWishlistUsecase => async (req, res) => {
  const { id } = req.params;
  const wishlist = await getWishlistUsecase.execute(id);
  res.status(200).json(WishlistMapper.toDTO(wishlist));
};

module.exports = getOneWishlistController;
