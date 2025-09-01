import { Card } from 'antd';

/**
 * @param {Object} root0
 * @param {WishlistEntity} root0.wishlist
 * */
export default function WishlistCard({ wishlist }) {
  const { id, name, isPublic, user, items, whatever } = wishlist;

  return (
    <Card hoverable>
      <h1>{name}</h1>
    </Card>
  );
}
