import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import WishlistPage from '../pages/WishlistPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/wishlists" element={
        <PrivateRoute>
          <WishlistPage />
        </PrivateRoute>
      } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}