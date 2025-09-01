const WishlistEntity = require('../../../domain/entities/WishlistEntity');
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
   * @returns {WishlistEntity}
   * */
  async execute(inputDto) {
    const { name, userId, isPublic } = inputDto;

    const wishlist = new WishlistEntity({
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
