import { Typography } from 'antd';
import { useEffect } from 'react';
import api from '../api/axios.js';

export default function WishlistPage() {
  const fetchWishlists = async () => {
    try {
      const res = await api.get('api/wishlists');
      console.log(res);
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
    </>
  );
}
