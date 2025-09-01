import { Button, Empty, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import api from '../../api/axios.js';
import WishlistCard from '../../components/WishlistCard.jsx';
import { useNavigate } from 'react-router-dom';

export default function WishlistPage() {
  const [wishlists, setWishlists] = useState([]);
  const navigate = useNavigate();

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

  const onCreate = () => {
    navigate('/wishlists/create');
  };

  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography.Title level={2}>Мои вишлисты</Typography.Title>
      <Space size="large" wrap style={{ marginTop: '2rem' }}>
        {!wishlists.length ? (
          <Empty
            description="У вас пока нет вишлистов"
            style={{ marginTop: '2rem' }}
          >
            <Button type="primary" onClick={onCreate}>
              Создать вишлист
            </Button>
          </Empty>
        ) : (
          wishlists.map(wishlist => (
            <WishlistCard
              key={wishlist.id}
              wishlist={wishlist}
              onClick={() => navigate(`/wishlists/${wishlist.id}`)}
            />
          ))
        )}
      </Space>
    </div>
  );
}
