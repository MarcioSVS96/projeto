import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    if (user.role === 'admin') navigate('/dashboard/admin');
    else if (user.role === 'instrutor') navigate('/dashboard/instrutor');
    else if (user.role === 'aluno') navigate('/dashboard/aluno');
  }, [user, navigate]);

  return null; // Pode mostrar um loading ou nada
}
