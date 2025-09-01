import { Typography, Card, Form, Input, Switch, Button } from 'antd';

export default function CreateWishlistPage() {
  return (
    <Card style={{ maxWidth: 500, margin: '2rem auto' }}>
      <Typography.Title level={3}>Создать вишлист</Typography.Title>

      <Form layout="vertical">
        <Form.Item
          label="Название"
          name="name"
          rules={[{ required: true, message: 'Введите название вишлиста' }]}
        >
          <Input placeholder="Например: Подарки на День Рождения" />
        </Form.Item>

        <Form.Item label="Публичный" name="isPublic" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Создать
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
