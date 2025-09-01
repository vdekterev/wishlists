class WishlistEntity {
  constructor({ id, name, userId, isPublic = true, items = [] }) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.isPublic = isPublic;
    this.items = items;
  }

  /**
   * @param {WishlistEntity} wishlist
   * @returns {?WishlistEntity}
   * */
  static get(wishlist) {
    return wishlist ? new WishlistEntity(wishlist) : null;
  }
}

module.exports = WishlistEntity;
