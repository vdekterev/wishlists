const CreateWishlistDTO = require('../../../application/dto/wishlist/CreateWishlistDTO');
const WishlistMapper = require('../../mappers/WishlistMapper');

/**
 * @param {CreateWishlistService} createWishlistUseCase
 * */
const createWishlistController = createWishlistUseCase => async (req, res) => {
  const { userId } = req.user;
  const { name, isPublic } = req.body;

  const dto = new CreateWishlistDTO({ name, userId, isPublic });
  const wishlist = await createWishlistUseCase.execute(dto);

  const output = WishlistMapper.toDTO(wishlist);
  res.status(201).json(output);
};

module.exports = createWishlistController;
