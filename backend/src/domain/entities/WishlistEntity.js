class WishlistEntity {
  /**
   * @param {object} user
   */
  constructor(user) {
    if (!user) {
      return;
    }
    this.id = user.id;
    this.name = user.name;
    this.userId = user.userId;
    this.isPublic = user.isPublic;
    this.items = user.items || [];
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
