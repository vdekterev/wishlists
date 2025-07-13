const Wishlist = require('../../../domain/entities/Wishlist');
const { v4: uuidv4 } = require('uuid');

class CreateWishlistService {
  /**
   * @param wishlistRepository {PrismaWishlistRepository}
   * */
  constructor(wishlistRepository) {
    this.wishlistRepository = wishlistRepository;
  }

  /**
   * @param inputDto {CreateWishlistDTO}
   * */
  async execute(inputDto) {
    const { name, userId, isPublic } = inputDto;

    const wishlist = new Wishlist({
      id: uuidv4(),
      name,
      userId,
      isPublic,
    });

    await this.wishlistRepository.save(wishlist);

    return wishlist;
  }
}

module.exports = CreateWishlistService;
