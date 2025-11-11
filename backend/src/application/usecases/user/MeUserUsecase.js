const ResponseError = require('../../../domain/errors/ResponseError');

class MeUserUsecase {
  /**
   * @param {PrismaUserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * @param {MeUserDTO} inputDto
   * @returns {Promise<UserEntity>}
   * @throws {ResponseError}
   */
  async process(inputDto) {
    const { userId } = inputDto;

    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new ResponseError('Пользователь не найден', 404);
    }

    return user;
  }
}

module.exports = MeUserUsecase;
