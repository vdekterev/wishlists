import AppLayout from './layout/AppLayout.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import 'antd/dist/reset.css';

export default function App() {
  return (
    <AppLayout>
      <AppRoutes/>
    </AppLayout>
  );
}