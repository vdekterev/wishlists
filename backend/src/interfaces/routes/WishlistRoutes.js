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
const authenticate = require('../middlewares/authenticate');

router.get('/', getAllWishlists);
router.get('/:id', withValidation(validateGetOneWishlist), getOneWishlist);
router.post(
  '/',
  withValidation([authenticate, validateCreateWishlist]),
  createWishlist,
);
router.put(
  '/:id',
  withValidation([authenticate, validateUpdateWishlist]),
  updateWishlist,
);
router.delete(
  '/:id',
  withValidation([authenticate, validateDeleteWishlist]),
  deleteWishlist,
);

module.exports = router;
