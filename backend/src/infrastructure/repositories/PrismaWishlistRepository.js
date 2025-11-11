const { PrismaClient } = require('@prisma/client');
const WishlistEntity = require('../../domain/entities/WishlistEntity');

class PrismaWishlistRepository {
  /**
   * @param prismaClient {PrismaClient}
   * */
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

  /**
   * @param {WishlistEntity} wishlist
   * */
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
   * @returns {Promise<?WishlistEntity>}
   * */
  async getOne(id, options = {}) {
    const wishlist = await this.prisma.wishlist.findUnique({
      where: { id },
      include: options.include || {},
    });

    return new WishlistEntity(wishlist);
  }

  /**
   * @param {Object} options
   * @returns {Promise<?WishlistEntity[]>}
   * */
  async getAll(options = {}) {
    const wishlists = await this.prisma.wishlist.findMany({
      include: options.include || {},
    });

    return wishlists?.map(wishlist => new WishlistEntity(wishlist));
  }

  /**
   * @param {number} id
   * @param {Object} options
   * @returns {?WishlistEntity}
   * */
  async update(id, options = {}) {
    const existing = await this.prisma.wishlist.findUnique({
      where: { id },
    });

    if (!existing) {
      return null;
    }

    const updated = await this.prisma.wishlist.update({
      where: { id },
      data: {
        name: options.name,
        isPublic: options.isPublic,
      },
    });

    return new WishlistEntity(updated);
  }

  /**
   * @param {number} id
   * @param {Object} options
   * @returns {Promise<boolean>}
   * */
  async deleteOne(id, options = {}) {
    const existing = await this.prisma.wishlist.findUnique({
      where: { id },
    });

    if (!existing) {
      return false;
    }

    await this.prisma.wishlist.delete({
      where: { id },
    });

    return true;
  }
}

module.exports = PrismaWishlistRepository;
