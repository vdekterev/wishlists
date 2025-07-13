import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function LoginForm() {
  const navigate = useNavigate();

  const onFinish = async values => {
    try {
      const res = await api.post('api/users/login', values);
      localStorage.setItem('token', res.data.token);
      message.success('Успешный вход!')
      navigate('/wishlists');
    } catch (err) {
      message.error(err.response?.data?.error || 'Ошибка входа');
    }
  }
  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Пароль" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Войти
      </Button>
    </Form>
  );
}