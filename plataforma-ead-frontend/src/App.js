import './styles/global.css';
import RoutesApp from './routes/RoutesApp';
import { AuthProvider } from './contexts/AuthContext';
import { UsersProvider } from './contexts/UsersContext';

function App() {
  return (
    <UsersProvider>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </UsersProvider>
  );
}

export default App;
