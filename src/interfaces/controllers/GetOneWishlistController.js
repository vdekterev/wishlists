const WishlistMapper = require('../mappers/WishlistMapper');

const getOneWishlistController = getWishlistUsecase => async (req, res) => {
  try {
    const { id } = req.params;
    const wishlist = await getWishlistUsecase.execute(id);
    if (!wishlist) {
      res.status(404).json({ error: 'Wishlist not found' });
    }
    res.status(200).json(WishlistMapper.toDTO(wishlist));
  } catch (err) {
    console.trace(err);
    res.status(500).json({ error: 'Could not get Wishlist' });
  }
};

module.exports = getOneWishlistController;
