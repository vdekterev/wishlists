import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const { Title, Paragraph } = Typography;

export default function LandingPage() {
  const navigate = useNavigate();

  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <div style={{ maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
      <Title>Простой сервис вишлистов</Title>
      <Paragraph>
        Создавайте списки желаемого и делитесь ими с друзьями!
      </Paragraph>
      {user ? (
        <Button
          type="primary"
          size="large"
          onClick={() => navigate('/wishlists')}
        >
          Мои вишлисты
        </Button>
      ) : (
        <Button type="primary" size="large" onClick={() => navigate('/auth')}>
          Создать вишлист
        </Button>
      )}
    </div>
  );
}
