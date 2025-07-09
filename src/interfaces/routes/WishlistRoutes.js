const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const PrismaWishlistRepository = require('../../infrastructure/repositories/PrismaWishlistRepository');
const CreateWishlistService = require('../../application/services/CreateWishlistService');
const createWishlistController = require('../controllers/WishlistController');

const prisma = new PrismaClient();
const repo = new PrismaWishlistRepository(prisma);
const useCase = new CreateWishlistService(repo);
const controller = createWishlistController(useCase);

router.post('/', controller);

module.exports = router;
