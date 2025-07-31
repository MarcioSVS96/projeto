import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

export default function DashboardAluno() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Dashboard do Aluno</h2>
        <p>Bem-vindo, {user?.email}!</p>
        <div className="dashboard-buttons">
          <button className="primary-btn">Ver meus cursos</button>
          <button className="logout-btn" onClick={logout}>Sair</button>
        </div>
      </div>

      <section className="dashboard-section">
        <h3>Seus Cursos</h3>
        <p>Aqui você verá a lista de cursos que você está matriculado.</p>
        {/* Futuramente: lista de cursos */}
      </section>

      <section className="dashboard-section">
        <h3>Progresso</h3>
        <p>Acompanhe seu progresso nas aulas e avaliações.</p>
      </section>
    </div>
  );
}
