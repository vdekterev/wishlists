const { PrismaClient } = require('@prisma/client');
const UserEntity = require('../../domain/entities/UserEntity');

class PrismaUserRepository {
  /**
   * @param prismaClient {PrismaClient}
   */
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

  /**
   * @param {UserEntity} user
   */
  async create(user) {
    return this.prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        password: user.password,
        name: user.name,
      },
    });
  }

  /**
   * @param {string} email
   * @returns {?UserEntity}
   */
  async findByEmail(email) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return new UserEntity(user);
  }

  /**
   * @param {number} id
   * @returns {?UserEntity}
   */
  async findById(id) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return new UserEntity(user);
  }
}

module.exports = PrismaUserRepository;
