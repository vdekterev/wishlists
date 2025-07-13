class GetAllWishlistsService {
  /**
   * @param {PrismaWishlistRepository} wishlistRepository
   * */
  constructor(wishlistRepository) {
    this.wishlistRepository = wishlistRepository;
  }

  /**
   * @param {Object} options
   * */
  async execute(options = {}) {
    return await this.wishlistRepository.getAll(options);
  }
}

module.exports = GetAllWishlistsService;
