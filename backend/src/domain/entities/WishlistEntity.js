class WishlistEntity {
  /**
   * @param {number} id - id вишлиста
   * @param {string} name - Название
   * @param {number} userId - id пользователя
   * @param {boolean} isPublic - Публичный или приватный
   * @param {Array} items - Список подарков в вишлисте
   */
  constructor({ id, name, userId, isPublic = true, items = [] }) {
    if (!id) {
      return;
    }
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.isPublic = isPublic;
    this.items = items;
  }
}

module.exports = WishlistEntity;
