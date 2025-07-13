class UpdateWishlistService {
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
    return await this.wishlistRepository.update(id, options);
  }
}

module.exports = UpdateWishlistService;
