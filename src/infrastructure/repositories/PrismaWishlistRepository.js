const { PrismaClient } = require('@prisma/client');
const Wishlist = require('../../domain/entities/Wishlist');

class PrismaWishlistRepository {
  /**
   * @param prismaClient {PrismaClient}
   * */
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

  async save(wishlist) {
    await this.prisma.wishlist.create({
      data: {
        id: wishlist.id,
        name: wishlist.name,
        userId: wishlist.userId,
        isPublic: wishlist.isPublic,
      },
    });
  }

  /**
   * @param {number} id
   * @param {Object} options
   * */
  async getOne(id, options = {}) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: { id },
      include: options.include || {},
    });

    if (!wishlist) {
      return null;
    }

    return new Wishlist({
      id: wishlist.id,
      name: wishlist.name,
      userId: wishlist.userId,
      isPublic: wishlist.isPublic,
    });
  }

  /**
   * @param {Object} options
   * */
  async getAll(options = {}) {
    const wishlists = await this.prisma.wishlist.findMany({
      include: options.include || {},
    });

    if (!wishlists) {
      return null;
    }

    return wishlists.map(wishlist => new Wishlist(wishlist));
  }
}

module.exports = PrismaWishlistRepository;
