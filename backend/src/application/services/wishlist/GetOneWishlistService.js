const ResponseError = require('../../../domain/errors/ResponseError');

class GetOneWishlistService {
  /**
   * @param {PrismaWishlistRepository} wishlistRepository
   * */
  constructor(wishlistRepository) {
    this.wishlistRepository = wishlistRepository;
  }
  /**
   * @param {number} id
   * @param {Object} options
   * */
  async execute(id, options = {}) {
    const wishlist = await this.wishlistRepository.getOne(id, options);
    if (!wishlist) {
      throw new ResponseError('Вишлист не найден', 404);
    }
    return wishlist;
  }
}

module.exports = GetOneWishlistService;
