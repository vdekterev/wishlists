const ResponseError = require('../../../domain/errors/ResponseError');

class DeleteWishlistService {
  /**
   * @param {PrismaWishlistRepository} wishlistRepository
   * */
  constructor(wishlistRepository) {
    this.wishlistRepository = wishlistRepository;
  }
  /**
   * @param {number} id
   * @param {Object} options
   * @returns {Promise<boolean>}
   * */
  async execute(id, options = {}) {
    const isDeleted = await this.wishlistRepository.deleteOne(id, options);
    if (!isDeleted) {
      throw new ResponseError('Ошибка при удалении вишлиста', 400);
    }
    return isDeleted;
  }
}

module.exports = DeleteWishlistService;
