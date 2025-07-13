const { PrismaClient } = require('@prisma/client');
const User = require('../../domain/entities/User');

class PrismaUserRepository {
  /**
   * @param prismaClient {PrismaClient}
   * */
  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

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

  async findByEmail(email) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return new User(user);
  }

  async findById(id) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return new User(user);
  }
}

module.exports = PrismaUserRepository;
