import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleVerCursos = () => {
    navigate('/courses');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Bem-vindo, {user?.email}</h2>
        <p>Acesse seus cursos e continue aprendendo.</p>
        <div className="dashboard-buttons">
          <button className="primary-btn" onClick={handleVerCursos}>
            Ver Meus Cursos
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
