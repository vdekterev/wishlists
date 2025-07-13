const express = require('express');
const router = express.Router();

const {
  getOneWishlist,
  createWishlist,
} = require('../controllers/WishlistControllerFactory');

router.get('/:id', getOneWishlist);
router.post('/', createWishlist);

module.exports = router;
