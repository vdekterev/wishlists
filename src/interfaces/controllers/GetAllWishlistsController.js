const WishlistMapper = require('../mappers/WishlistMapper');

const getAllWishlistsController = getWishlistUsecase => async (req, res) => {
  try {
    const wishlists = await getWishlistUsecase.execute();
    if (!wishlists) {
      res.status(404).json({ error: 'Could not get Wishlists' });
    }

    const mapped = wishlists.map(wishlist => WishlistMapper.toDTO(wishlist));

    res.status(200).json(mapped);
  } catch (err) {
    console.trace(err);
    res.status(500).json({ error: 'Could not get Wishlists' });
  }
};

module.exports = getAllWishlistsController;
