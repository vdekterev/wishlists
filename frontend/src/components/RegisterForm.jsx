import { Button, Form, Input } from 'antd';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm({ message }) {
  const { fetchUser } = useAuth();
  const navigate = useNavigate();

  const onFinish = async formData => {
    try {
      await api.post('api/users/register', formData);
      await fetchUser();
      navigate('/');
    } catch {
      message.error('Ошибка регистрации')
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="name" label="Имя" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Пароль" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Зарегистрироваться
      </Button>
    </Form>
  );
}
