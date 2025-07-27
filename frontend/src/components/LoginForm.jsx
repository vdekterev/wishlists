import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function LoginForm({ message }) {
  const navigate = useNavigate();

  const onFinish = async values => {
    try {
      const res = await api.post('api/users/login', values);
      localStorage.setItem('token', res.data.token);
      message.success('Успешный вход!');
      navigate(0);
    } catch (err) {
      const errors = err.response?.data?.errors;
      if (!errors) {
        return message.error('Ошибка авторизации');
      }
      errors.map(error => {
        message.error(error.message);
      });
    }
  };
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
