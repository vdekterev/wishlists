const CreateWishlistDTO = require('../../../application/dto/wishlist/CreateWishlistDTO');
const WishlistMapper = require('../../mappers/WishlistMapper');

const createWishlistController = createWishlistUseCase => async (req, res) => {
  try {
    const dto = new CreateWishlistDTO(req.body);
    const wishlist = await createWishlistUseCase.execute(dto);

    const output = WishlistMapper.toDTO(wishlist);
    res.status(201).json(output);
  } catch (err) {
    console.trace(err);
    res.status(500).json({ error: 'Не удалось создать вишлист' });
  }
};

module.exports = createWishlistController;
