import { Button, Form, Input } from 'antd';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext.jsx';

export default function RegisterForm({ message }) {
  const { fetchUser } = useAuth();

  const onFinish = async values => {
    try {
      await api.post('api/users/register', values);
      await fetchUser();
    } catch (err) {
      const errors = err.response?.data?.errors;
      if (!errors) {
        return message.error('Ошибка регистрации');
      }
      errors.map(error => {
        message.error(error.message);
      });
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
