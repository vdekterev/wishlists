const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ResponseError = require('../../../domain/errors/ResponseError');

class LoginUserUsecase {
  /**
   * @param {PrismaUserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * @param {LoginUserDTO} inputDto
   * @returns {Promise<{token: string, user: UserEntity}>}
   * @throws {ResponseError}
   */
  async process(inputDto) {
    const { email, password } = inputDto;

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new ResponseError(`Пользователь с email ${email} не найден`, 401);
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new ResponseError('Неправильный пароль', 401);
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'dev-secret',
      { expiresIn: process.env.JWT_EXPIRES || '1h' },
    );

    return { token, user };
  }
}

module.exports = LoginUserUsecase;
