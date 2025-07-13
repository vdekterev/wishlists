class CreateWishlistDTO {
  constructor({ name, userId, isPublic = true }) {
    this.name = name;
    this.userId = userId;
    this.isPublic = isPublic;
  }
}

module.exports = CreateWishlistDTO;
