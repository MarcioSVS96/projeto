import { useAuth } from '../contexts/AuthContext';
import './Dashboard.css';

export default function DashboardAdmin() {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Dashboard do Admin</h2>
        <p>Bem-vindo, {user?.email}!</p>
        <div className="dashboard-buttons">
          <button className="primary-btn">Gerenciar usuários</button>
          <button className="logout-btn" onClick={logout}>Sair</button>
        </div>
      </div>

      <section className="dashboard-section">
        <h3>Gestão de Usuários</h3>
        <p>Aprovar instrutores e alunos, editar permissões e acessos.</p>
      </section>

      <section className="dashboard-section">
        <h3>Aprovar Cursos</h3>
        <p>Gerencie os cursos enviados para aprovação.</p>
      </section>
    </div>
  );
}
