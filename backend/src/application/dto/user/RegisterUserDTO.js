class RegisterUserDTO {
  constructor({ id, email, password, name }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
  }
}

module.exports = RegisterUserDTO;
