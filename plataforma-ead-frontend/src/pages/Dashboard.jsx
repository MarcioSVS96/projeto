import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // limpa estado do usuário
    navigate('/login'); // redireciona para a página de login
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bem-vindo, {user?.email}</h2>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
