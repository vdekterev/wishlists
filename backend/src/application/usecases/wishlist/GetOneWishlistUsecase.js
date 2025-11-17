const ResponseError = require('../../../domain/errors/ResponseError');

class GetOneWishlistUsecase {
  /**
   * @param {PrismaWishlistRepository} wishlistRepository
   */
  constructor(wishlistRepository) {
    this.wishlistRepository = wishlistRepository;
  }
  /**
   * @param {number} id
   * @returns {Promise<WishlistEntity>}
   * @throws {ResponseError}
   */
  async process(id) {
    const wishlist = await this.wishlistRepository.getOne(id);
    if (!wishlist) {
      throw new ResponseError('Вишлист не найден', 404);
    }
    return wishlist;
  }
}

module.exports = GetOneWishlistUsecase;
