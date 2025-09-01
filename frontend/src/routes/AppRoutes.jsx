import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import WishlistPage from '../pages/Wishlist/WishlistPage.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import CreateWishlistPage from '../pages/Wishlist/CreateWishlistPage.jsx';

export default function AppRoutes() {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {!isAuth && <Route path="/auth" element={<AuthPage />} />}

      <Route
        path="/wishlists"
        element={
          <PrivateRoute>
            <WishlistPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/wishlists/create"
        element={
          <PrivateRoute>
            <CreateWishlistPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/wishlists/:id"
        element={
          <PrivateRoute>
            <WishlistPage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
