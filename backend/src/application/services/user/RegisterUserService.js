const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const User = require('../../../domain/entities/User');
const UserMapper = require('../../../interfaces/mappers/UserMapper');
const ResponseError = require('../../../domain/errors/ResponseError');

class RegisterUserService {
  /**
   * @param {PrismaUserRepository} userRepository
   * */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * @param inputDto {RegisterUserDTO}
   * */
  async execute(inputDto) {
    const { email, password, name } = inputDto;

    const existing = await this.userRepository.findByEmail(email);

    if (existing) {
      throw new ResponseError(
        `Пользователь с email ${email} уже зарегистрирован`,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      id: uuidv4(),
      email,
      password: hashedPassword,
      name: name,
    });

    await this.userRepository.create(user);

    return UserMapper.toDTO(user);
  }
}

module.exports = RegisterUserService;
