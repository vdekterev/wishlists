const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const UserEntity = require('../../../domain/entities/UserEntity');
const UserMapper = require('../../../interfaces/mappers/UserMapper');
const ResponseError = require('../../../domain/errors/ResponseError');

class RegisterUserUsecase {
  /**
   * @param {PrismaUserRepository} userRepository
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * @param inputDto {RegisterUserDTO}
   * @returns {Promise<{id: number, email: string, password: string, name: string}>}
   * @throws {ResponseError}
   */
  async process(inputDto) {
    const { email, password, name } = inputDto;

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser.isExist()) {
      throw new ResponseError(
        `Пользователь с email ${email} уже зарегистрирован`,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserEntity({
      id: uuidv4(),
      email,
      password: hashedPassword,
      name: name,
    });

    await this.userRepository.create(user);

    return UserMapper.toDTO(user);
  }
}

module.exports = RegisterUserUsecase;
