const MeUserDTO = require('../../../application/dto/user/MeUserDTO');
const UserMapper = require('../../mappers/UserMapper');

const meUserController = meUsecase => async (req, res) => {
  const dto = new MeUserDTO(req.user);
  const user = await meUsecase.execute(dto);
  delete user.password;

  res.status(200).json(UserMapper.toDTO(user));
};

module.exports = meUserController;
