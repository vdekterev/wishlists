const Wishlist = require('../../domain/entities/Wishlist');
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
    const wishlist = new Wishlist({
      id: uuidv4(),
      name: inputDto.name,
      userId: inputDto.userId,
      isPublic: inputDto.isPublic,
    });

    await this.wishlistRepository.save(wishlist);

    return wishlist;
  }
}

module.exports = CreateWishlistService;
