class User {
  constructor({ id, email, password, name /*wishlists*/ }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    // this.wishlists = wishlists;
  }

  /**
   * @param {User} user
   * */
  static get(user) {
    return user ? new User(user) : null;
  }
}

module.exports = User;
