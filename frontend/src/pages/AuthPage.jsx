import { Tabs, Card } from 'antd';

import LoginForm from '../components/LoginForm.jsx';
import RegisterForm from '../components/RegisterForm';

export default function AuthPage() {
  return (
    <Card style={{ maxWidth: 400, margin: '2rem auto' }}>
      <Tabs defaultActiveKey="login" centered>
        <Tabs.TabPane tab="Войти" key="login">
          <LoginForm />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Регистрация" key="register">
          <RegisterForm />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
}