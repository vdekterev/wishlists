const LoginUserDTO = require('../../../application/dto/user/LoginUserDTO');
const UserMapper = require('../../mappers/UserMapper');

/**
 * @param {LoginUserUsecase} loginUsecase
 */
const loginUserController = loginUsecase => async (req, res) => {
  const dto = new LoginUserDTO(req.body);
  const { token, user } = await loginUsecase.process(dto);
  delete user.password;

  const output = UserMapper.toDTO(user);

  res.status(200).json({ token, user: output });
};

module.exports = loginUserController;
