const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const errorHandler = require('./interfaces/middlewares/errorHandler');
const wishlistRoutes = require('./interfaces/routes/WishlistRoutes');
const userRoutes = require('./interfaces/routes/UserRoutes');

dotenv.config();

const MODE = process.env.MODE || 'tiny';

const app = express();
// Middleware
app.use(express.json());
app.use(morgan(MODE));
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

// Routes
app.use('/api/wishlists', wishlistRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);
module.exports = app;
