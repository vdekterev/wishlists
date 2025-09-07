import { Avatar, Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import api from '../api/axios.js';
import { useNavigate } from 'react-router-dom';

/**
 * @param {Object} root0
 * @param {WishlistEntity} root0.wishlist
 * @param {Function} root0.onClick
 * */
export default function WishlistCard({ wishlist, onClick }) {
  const { id, name, isPublic, user, items } = wishlist;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const removeWishlist = async () => {
    try {
      setLoading(true);
      await api.delete(`api/wishlists/${id}`);
      navigate(0);
    } catch {
      Notification.error('Ошибка при удалении вишлиста');
    } finally {
      setLoading(false);
    }
  };

  const actions = [
    <EditOutlined key="edit" />,
    // <SettingOutlined key="setting" />,
    <DeleteOutlined key="delete" onClick={removeWishlist} />,
  ];

  return (
    <Card
      style={{ minWidth: 300 }}
      loading={loading}
      actions={actions}
      onClick={onClick}
    >
      <Card.Meta
        avatar={
          <Avatar
            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${Math.random()}`}
          />
        }
        title={name}
        description={
          <>
            <p>This is the description</p>
          </>
        }
      />
    </Card>
  );
}
