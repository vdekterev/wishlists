class CreateWishlistDTO {
  constructor({ name, userId, isPublic }) {
    this.name = name;
    this.userId = userId;
    this.isPublic = isPublic;
  }
}

module.exports = CreateWishlistDTO;
