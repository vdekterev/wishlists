const WishlistMapper = require('../mappers/WishlistMapper');

const getOneWishlistController = getWishlistUsecase => async (req, res) => {
  try {
    const { id } = req.params;
    const wishlist = await getWishlistUsecase.execute(id);
    if (!wishlist) {
      return res.status(404).json({ error: 'Вишлист не найден' });
    }
    res.status(200).json(WishlistMapper.toDTO(wishlist));
  } catch (err) {
    console.trace(err);
    res.status(500).json({ error: 'Не удалось получить вишлист' });
  }
};

module.exports = getOneWishlistController;
