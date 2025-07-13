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
    return await this.wishlistRepository.getOne(id, options);
  }
}

module.exports = GetOneWishlistService;
