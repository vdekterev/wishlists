class UserEntity {
  /**
   * @param {Object} root0
   * @param {number} root0.id
   * @param {string} root0.email
   * @param {string} root0.password
   * @param {string} root0.name
   * */
  constructor({ id, email, password, name /*wishlists*/ }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    // this.wishlists = wishlists;
  }

  /**
   * @param {UserEntity} user
   * */
  static get(user) {
    return user ? new UserEntity(user) : null;
  }
}

module.exports = UserEntity;
