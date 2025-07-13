const toDTO = userEntity => ({
  id: userEntity.id,
  email: userEntity.email,
  password: userEntity.password,
  name: userEntity.name,
});

module.exports = { toDTO };
