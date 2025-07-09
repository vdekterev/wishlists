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
}

module.exports = PrismaWishlistRepository;
