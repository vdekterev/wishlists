import { Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import api from '../api/axios.js';
import WishlistCard from '../components/WishlistCard.jsx';

export default function WishlistPage() {
  const [wishlists, setWishlists] = useState([]);

  const fetchWishlists = async () => {
    try {
      const res = await api.get('api/wishlists');
      setWishlists(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void fetchWishlists();
  }, []);

  return (
    <>
      <Typography.Title>Мои вишлисты</Typography.Title>
      <Space>
        {wishlists.map(wishlist => (
          <WishlistCard key={wishlist.id} wishlist={wishlist} />
        ))}
      </Space>
    </>
  );
}
