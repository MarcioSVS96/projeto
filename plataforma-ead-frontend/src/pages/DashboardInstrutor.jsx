import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

export default function DashboardInstrutor() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Dashboard do Instrutor</h2>
        <p>Bem-vindo, {user?.email}!</p>
        <div className="dashboard-buttons">
          <button className="primary-btn">Criar/Editar cursos</button>
          <button className="logout-btn" onClick={logout}>Sair</button>
        </div>
      </div>

      <section className="dashboard-section">
        <h3>Gerencie seus cursos</h3>
        <p>Crie, edite e organize seus cursos e módulos.</p>
      </section>

      <section className="dashboard-section">
        <h3>Material de Apoio</h3>
        <p>Envie vídeos, arquivos e outros recursos para os alunos.</p>
      </section>
    </div>
  );
}
