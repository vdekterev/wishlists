class UserEntity {
  /**
   * @param {number} id - id
   * @param {string} email - Почта
   * @param {string} password - Пароль
   * @param {string} name - Имя
   */
  constructor({ id, email, password, name /*wishlists*/ }) {
    if (!id) {
      return;
    }
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    // this.wishlists = wishlists;
  }
}

module.exports = UserEntity;
