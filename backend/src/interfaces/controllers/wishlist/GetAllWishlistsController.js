const WishlistMapper = require('../../mappers/WishlistMapper');

const getAllWishlistsController = getWishlistUsecase => async (req, res) => {
  try {
    const wishlists = await getWishlistUsecase.execute();
    if (!wishlists) {
      return res.status(404).json({ error: 'Ошибка при получении вишлистов' });
    }

    const mapped = wishlists.map(wishlist => WishlistMapper.toDTO(wishlist));

    res.status(200).json(mapped);
  } catch (err) {
    console.trace(err);
    res.status(500).json({ error: 'Ошибка при получении вишлистов' });
  }
};

module.exports = getAllWishlistsController;
