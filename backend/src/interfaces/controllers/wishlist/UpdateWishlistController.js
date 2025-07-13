const WishlistMapper = require('../../mappers/WishlistMapper');

const updateWishlistController = updateWishlistUsecase => async (req, res) => {
  try {
    const { id } = req.params;
    const { name, isPublic } = req.body;

    const updated = await updateWishlistUsecase.execute(id, {
      name: name,
      isPublic: isPublic,
    });

    if (!updated) {
      return res.status(404).json({ error: 'Вишлист не найден' });
    }

    res.status(200).json(WishlistMapper.toDTO(updated));
  } catch (err) {
    console.trace(err);
    res.status(500).json({ error: 'Не удалось обновить вишлист' });
  }
};

module.exports = updateWishlistController;
