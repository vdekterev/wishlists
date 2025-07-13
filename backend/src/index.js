const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const wishlistRoutes = require('./interfaces/routes/WishlistRoutes');
const userRoutes = require('./interfaces/routes/UserRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MODE = process.env.MODE || 'tiny';

// Middleware
app.use(express.json());
app.use(morgan(MODE));
app.use(
  cors({
    origin: 'http://localhost:5173', // или '*' для всех (в DEV)
    credentials: true, // если используешь cookie / auth
  }),
);

// Routes
app.use('/api/wishlists', wishlistRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
