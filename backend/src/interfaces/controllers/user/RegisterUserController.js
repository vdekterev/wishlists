const RegisterUserDTO = require('../../../application/dto/user/RegisterUserDTO');
const UserMapper = require('../../mappers/UserMapper');

const registerUserController = registerUsecase => async (req, res) => {
  try {
    const dto = new RegisterUserDTO(req.body);
    const user = await registerUsecase.execute(dto);
    delete user.password;

    const output = UserMapper.toDTO(user);
    res.status(201).json(output);
  } catch (err) {
    console.trace(err);
    res.status(400).json({ error: 'Ошибка при регистрации пользователя' });
  }
};

module.exports = registerUserController;
