const CreateWishlistDTO = require('../../../application/dto/wishlist/CreateWishlistDTO');
const WishlistMapper = require('../../mappers/WishlistMapper');

/**
 * @param {CreateWishlistUsecase} createWishlistUseCase
 * */
const createWishlistController = createWishlistUseCase => async (req, res) => {
  const { userId } = req.user;
  const { name, isPublic } = req.body;

  const dto = new CreateWishlistDTO({ name, userId, isPublic });
  const wishlist = await createWishlistUseCase.process(dto);

  const output = WishlistMapper.toDTO(wishlist);
  res.status(201).json(output);
};

module.exports = createWishlistController;
