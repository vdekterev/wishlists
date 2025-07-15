const CreateWishlistDTO = require('../../../application/dto/wishlist/CreateWishlistDTO');
const WishlistMapper = require('../../mappers/WishlistMapper');

const createWishlistController = createWishlistUseCase => async (req, res) => {
  const dto = new CreateWishlistDTO(req.body);
  const wishlist = await createWishlistUseCase.execute(dto);

  const output = WishlistMapper.toDTO(wishlist);
  res.status(201).json(output);
};

module.exports = createWishlistController;
