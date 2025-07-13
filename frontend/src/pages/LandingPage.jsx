import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
      <Title>Простой сервис вишлистов</Title>
      <Paragraph>
        Создавайте списки желаемого и делитесь ими с друзьями!
      </Paragraph>
      <Button type="primary" size="large" onClick={() => navigate('/auth')}>
        Создать вишлист
      </Button>
    </div>
  );
}