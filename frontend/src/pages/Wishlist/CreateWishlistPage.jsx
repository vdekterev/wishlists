import { Typography, Card, Form, Input, Switch, Button } from 'antd';
import api from '../../api/axios.js';
import { useState } from 'react';
import Notification from '../../components/ui/Notification.jsx';
import { useNavigate } from 'react-router-dom';

export default function CreateWishlistPage() {
  const navigate = useNavigate();

  const [isFormLoading, setIsFormLoading] = useState(false);
  const onFinish = async formData => {
    try {
      setIsFormLoading(true);
      await api.post('/api/wishlists/', formData);
      Notification.info('Вишлист создан!');
      navigate('/wishlists');
    } catch {
      Notification.error('Ошибка при создании вишлиста');
    } finally {
      setIsFormLoading(false);
    }
  };

  return (
    <Card style={{ maxWidth: 500, margin: '2rem auto' }}>
      <Typography.Title level={3}>Создать вишлист</Typography.Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Название"
          name="name"
          rules={[{ required: true, message: 'Введите название вишлиста' }]}
        >
          <Input placeholder="Например: Подарки на День Рождения" />
        </Form.Item>

        <Form.Item label="Публичный" name="isPublic" valuePropName="checked">
          <Switch defaultChecked />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isFormLoading}
            block
          >
            Создать
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
