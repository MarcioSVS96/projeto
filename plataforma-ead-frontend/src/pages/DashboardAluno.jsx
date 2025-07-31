import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function DashboardAluno() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleVerCursos = () => {
    navigate('/aluno/cursos');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Dashboard do Aluno</h2>
        <p>Bem-vindo, {user?.email}!</p>
        <div className="dashboard-buttons">
          <button className="primary-btn" onClick={handleVerCursos}>
            Ver meus cursos
          </button>
          <button className="logout-btn" onClick={logout}>Sair</button>
        </div>
      </div>
    </div>
  );
}
