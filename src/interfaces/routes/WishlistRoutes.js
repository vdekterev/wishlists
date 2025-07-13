const express = require('express');
const router = express.Router();

const {
  getOneWishlist,
  getAllWishlists,
  createWishlist,
} = require('../controllers/WishlistControllerFactory');

router.get('/', getAllWishlists);
router.get('/:id', getOneWishlist);
router.post('/', createWishlist);

module.exports = router;
