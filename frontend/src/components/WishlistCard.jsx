import { Avatar, Button, Card, Modal, QRCode, Typography } from 'antd';
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import api from '../api/axios.js';
import { useNavigate } from 'react-router-dom';
import Notification from './ui/Notification.jsx';
/**
 * @param {Object} root0
 * @param {WishlistEntity} root0.wishlist
 * @param {Function} root0.onClick
 * */
export default function WishlistCard({ wishlist, onClick }) {
  const { id, name, isPublic, user, items } = wishlist;
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();

  const link = `http://localhost:5173/wishlists/${id}`;

  const openRemoveModal = () => {
    modal.confirm({
      title: `Вы уверены, что хотите удалить вишлист ${name}?`,
      icon: <ExclamationCircleOutlined />,
      okText: 'Да',
      cancelText: 'Нет',
      onOk: removeWishlist,
    });
  };

  const removeWishlist = async () => {
    try {
      await api.delete(`api/wishlists/${id}`);
      navigate(0);
    } catch {
      Notification.error('Ошибка при удалении вишлиста');
    } finally {
    }
  };

  const showQR = () => {
    modal.info({
      content: (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <QRCode
            size={250}
            icon={`https://api.dicebear.com/7.x/miniavs/svg?seed=${Math.random()}`}
            value={link}
          />
          <CopyToClipboard
            text={link}
            onCopy={() => {
              Notification.info('Скопировано', '', 3);
            }}
          >
            <Button type={'dashed'}>Нажмите, чтобы скопировать ссылку</Button>
          </CopyToClipboard>
        </div>
      ),
      icon: null,
      okText: 'Закрыть',
    });
  };

  const actions = [
    <DeleteOutlined key="delete" onClick={openRemoveModal} />,
    <ShareAltOutlined key="share" onClick={showQR} />,
  ];

  return (
    <>
      <Card style={{ minWidth: 300 }} actions={actions} onClick={onClick}>
        <Card.Meta
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${Math.random()}`}
            />
          }
          title={name}
          description={<p>This is the description</p>}
        />
      </Card>
      {contextHolder}
    </>
  );
}
