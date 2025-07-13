const CreateWishlistDTO = require('../../application/dto/CreateWishlistDTO');
const WishlistMapper = require('../../interfaces/mappers/WishlistMapper');

const createWishlistController = createWishlistUseCase => async (req, res) => {
  try {
    const dto = new CreateWishlistDTO(req.body);
    const wishlistEntity = await createWishlistUseCase.execute(dto);

    const output = WishlistMapper.toDTO(wishlistEntity);
    res.status(201).json(output);
  } catch (err) {
    console.trace(err);
    res.status(500).json({ error: 'Could not create Wishlist' });
  }
};

module.exports = createWishlistController;
