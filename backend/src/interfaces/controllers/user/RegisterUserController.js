const RegisterUserDTO = require('../../../application/dto/user/RegisterUserDTO');
const UserMapper = require('../../mappers/UserMapper');

const registerUserController = registerUsecase => async (req, res) => {
  const dto = new RegisterUserDTO(req.body);
  const user = await registerUsecase.execute(dto);
  delete user.password;

  const output = UserMapper.toDTO(user);
  res.status(201).json(output);
};

module.exports = registerUserController;
