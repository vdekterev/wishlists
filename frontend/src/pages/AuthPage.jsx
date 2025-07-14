import { Tabs, Card, message } from 'antd';

import LoginForm from '../components/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm';

export default function AuthPage() {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <Card style={{ maxWidth: 400, margin: '2rem auto' }}>
      {contextHolder}
      <Tabs defaultActiveKey="login" centered>
        <Tabs.TabPane tab="Войти" key="login">
          <LoginForm message={messageApi} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Регистрация" key="register">
          <RegisterForm message={messageApi} />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
}
