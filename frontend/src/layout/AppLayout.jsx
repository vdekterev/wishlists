import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export default function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
        <Link to="/" style={{ color: '#fff', fontWeight: 'bold' }}>WishlistApp</Link>
        <Link to="/wishlists" style={{ color: '#fff' }}>Мои вишлисты</Link>
      </Header>
      <Content style={{ padding: '2rem' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Wishlist ©2025
      </Footer>
    </Layout>
  );
}