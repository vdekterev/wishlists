class Wishlist {
  constructor({ id, name, userId, isPublic = true, items = [] }) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.isPublic = isPublic;
    this.items = items;
  }
}

module.exports = Wishlist;
