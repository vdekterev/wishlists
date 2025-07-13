const express = require('express');
const router = express.Router();

const {
  getAllWishlists,
  getOneWishlist,
  createWishlist,
  updateWishlist,
  deleteWishlist,
} = require('../controllers/wishlist/WishlistControllerFactory');

const {
  validateGetOneWishlist,
  validateCreateWishlist,
  validateUpdateWishlist,
  validateDeleteWishlist,
} = require('../validators/wishlistValidators');

const withValidation = require('../../interfaces/middlewares/withValidation');

router.get('/', getAllWishlists);
router.get('/:id', withValidation(validateGetOneWishlist), getOneWishlist);
router.post('/', withValidation(validateCreateWishlist), createWishlist);
router.put('/:id', withValidation(validateUpdateWishlist), updateWishlist);
router.delete('/:id', withValidation(validateDeleteWishlist), deleteWishlist);

module.exports = router;
