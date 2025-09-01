class GetAllWishlistsService {
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
  async execute(options = {}) {
    return await this.wishlistRepository.getAll(options);
  }
}

module.exports = GetAllWishlistsService;
