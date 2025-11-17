import { Dropdown, Layout, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useRef } from 'react';

const { Header, Content, Footer } = Layout;

export default function AppLayout({ children }) {
  const { user, logout, isAuth } = useAuth();

  const items = [
    {
      key: '1',
      label: user?.name,
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: <Link to={'/wishlists'}>Мои вишлисты</Link>,
    },
    {
      key: '4',
      label: <Link to={'/settings'}>Настройки</Link>,
    },
    {
      type: 'divider',
    },
    {
      key: '5',
      label: 'Выйти',
      onClick: logout,
    },
  ];
  const date = useRef(new Date().getFullYear());

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#fff',
        }}
      >
        <Link to="/" style={{ color: '#fff', fontWeight: 'bold' }}>
          WishlistApp
        </Link>
        {isAuth ? (
          <Dropdown menu={{ items }} trigger={['click']} arrow>
            <a onClick={e => e.preventDefault()}>
              <Space>Профиль</Space>
            </a>
          </Dropdown>
        ) : (
          <Link to={'/auth'}>Войти</Link>
        )}
      </Header>
      <Content style={{ padding: '2rem' }}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>Wishlist ©{date.current}</Footer>
    </Layout>
  );
}
