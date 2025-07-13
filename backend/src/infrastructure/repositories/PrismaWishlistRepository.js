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
   * @returns {Promise<Wishlist>}
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
   * @returns {Promise<Wishlist[]>}
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

  /**
   * @param {number} id
   * @param {Object} options
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

    return new Wishlist({
      id: updated.id,
      name: updated.name,
      userId: updated.userId,
      isPublic: updated.isPublic,
    });
  }

  /**
   * @param {number} id
   * @param {Object} options
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
