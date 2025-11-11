class GetAllWishlistsUsecase {
  /**
   * @param {PrismaWishlistRepository} wishlistRepository
   * */
  constructor(wishlistRepository) {
    this.wishlistRepository = wishlistRepository;
  }

  /**
   * @param {Object} options
   * @returns {Promise<?WishlistEntity[]>}
   * */
  async process(options = {}) {
    return await this.wishlistRepository.getAll(options);
  }
}

module.exports = GetAllWishlistsUsecase;
