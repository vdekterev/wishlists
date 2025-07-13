const deleteWishlistController = deleteWishlistUsecase => async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteWishlistUsecase.execute(id);
    if (!deleted) {
      return res.status(400).json({ error: 'Вишлист не найден' });
    }
    res.status(204).json();
  } catch (err) {
    console.trace(err);
    res.status(500).json({ error: 'Не удалось удалить вишлист' });
  }
};

module.exports = deleteWishlistController;
