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
   * */
  async execute(id, options = {}) {
    return await this.wishlistRepository.deleteOne(id, options);
  }
}

module.exports = DeleteWishlistService;
