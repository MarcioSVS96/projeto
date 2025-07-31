import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />; // redireciona para login se não estiver logado
  }

  return children; // exibe o componente protegido se estiver logado
}