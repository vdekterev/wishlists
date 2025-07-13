import { Button, Form, Input, message } from 'antd';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const navigate = useNavigate();

  const onFinish = async values => {
    try {
      await api.post('api/users/register', values);
      message.success('Регистрация успешна! Теперь войдите.')
    } catch (err) {
      message.error(err.response?.data?.error || 'Ошибка регистрации');
    }
  }


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