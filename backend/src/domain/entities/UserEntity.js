class UserEntity {
  /**
   * @param {object} user
   */
  constructor(user) {
    if (!user) {
      return;
    }
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.name = user.name;
    // this.wishlists = wishlists;
  }

  /**
   * Проверка существует ли User
   * @returns {boolean}
   */
  isExist() {
    return !!this.id;
  }
}

module.exports = UserEntity;
