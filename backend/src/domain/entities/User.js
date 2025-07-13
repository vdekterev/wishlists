class User {
  constructor({ id, email, password, name /*wishlists*/ }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    // this.wishlists = wishlists;
  }
}

module.exports = User;
