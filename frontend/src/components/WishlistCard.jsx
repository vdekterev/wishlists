import { Card } from 'antd';

/**
 * @param {Object} root0
 * @param {WishlistEntity} root0.wishlist
 * @param {Function} root0.onClick
 * */
export default function WishlistCard({ wishlist, onClick }) {
  const { id, name, isPublic, user, items, whatever } = wishlist;

  return (
    <Card hoverable onPress={onClick}>
      <h1>{name}</h1>
    </Card>
  );
}
