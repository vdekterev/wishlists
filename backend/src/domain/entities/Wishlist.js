class Wishlist {
  constructor({ id, name, userId, isPublic = true, items = [] }) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.isPublic = isPublic;
    this.items = items;
  }

  /**
   * @param {Wishlist} wishlist
   * */
  static get(wishlist) {
    return wishlist ? new Wishlist(wishlist) : null;
  }
}

module.exports = Wishlist;
