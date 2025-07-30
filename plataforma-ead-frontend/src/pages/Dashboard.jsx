import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: 20 }}>
      <h2>Bem-vindo, {user?.email}</h2>
      <button onClick={logout}>Sair</button>
    </div>
  );
}
