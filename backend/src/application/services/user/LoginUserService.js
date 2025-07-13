const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class LoginUserService {
  /**
   * @param {PrismaUserRepository} userRepository
   * */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * @param {LoginUserDTO} inputDto
   * */
  async execute(inputDto) {
    const { email, password } = inputDto;

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error(`Пользователь с email ${email} не найден`);
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error('Неправильный пароль');
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'dev-secret',
      { expiresIn: process.env.JWT_EXPIRES || '1h' },
    );

    return { token, user };
  }
}

module.exports = LoginUserService;
