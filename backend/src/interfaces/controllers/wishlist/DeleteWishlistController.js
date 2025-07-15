const deleteWishlistController = deleteWishlistUsecase => async (req, res) => {
  const { id } = req.params;
  const deleted = await deleteWishlistUsecase.execute(id);
  res.status(204).json(deleted);
};

module.exports = deleteWishlistController;
