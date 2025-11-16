class WishlistEntity {
  /**
   * @param {object} wishlist
   */
  constructor(wishlist) {
    if (!wishlist) {
      return;
    }
    this.id = wishlist.id;
    this.name = wishlist.name;
    this.userId = wishlist.userId;
    this.isPublic = !!(wishlist.isPublic ?? true);
    this.items = wishlist.items || [];
  }

  /**
   * Проверка существует ли Wishlist
   * @returns {boolean}
   */
  isExist() {
    return !!this.id;
  }
}

module.exports = WishlistEntity;
