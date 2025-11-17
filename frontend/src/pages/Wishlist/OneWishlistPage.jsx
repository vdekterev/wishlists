import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/axios.js';

export default function OneWishlistPage() {
  const [wishlist, setWishlist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await api.get(`api/wishlists/${id}`);
        setWishlist(res.data);
      } catch {
        Notification.error('Ошибка при получении вишлиста')
      }
    }
    void fetchWishlist()
  }, [id])

  return (
    <div>
      <h1>{wishlist?.id}</h1>
    </div>
  );
}
