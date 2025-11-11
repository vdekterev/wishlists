const WishlistMapper = require('../../mappers/WishlistMapper');

/**
 * @param {UpdateWishlistUsecase} updateWishlistUsecase
 * */
const updateWishlistController = updateWishlistUsecase => async (req, res) => {
  const { id } = req.params;
  const { name, isPublic } = req.body;

  const updated = await updateWishlistUsecase.process(id, {
    name: name,
    isPublic: isPublic,
  });

  res.status(200).json(WishlistMapper.toDTO(updated));
};

module.exports = updateWishlistController;
