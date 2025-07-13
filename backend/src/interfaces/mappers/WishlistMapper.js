const toDTO = wishlistEntity => ({
  id: wishlistEntity.id,
  name: wishlistEntity.name,
  userId: wishlistEntity.userId,
  isPublic: wishlistEntity.isPublic,
});

module.exports = { toDTO };
