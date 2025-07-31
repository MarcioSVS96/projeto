import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './DashboardAdmin.css';

export default function DashboardAdmin() {
  const [resumo, setResumo] = useState({
    totalAlunos: 0,
    totalInstrutores: 0,
    totalCursos: 0,
  });

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // Limpa o contexto de autenticação
    navigate('/');     // Redireciona para a tela de login
  };

  useEffect(() => {
    // Simulação de chamada a uma API
    const fetchData = async () => {
      setResumo({
        totalAlunos: 130,
        totalInstrutores: 12,
        totalCursos: 28,
      });
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-admin-container">
      <h1>Painel do Administrador</h1>

      <button className="botao-sair" onClick={handleLogout}>
        Sair
      </button>

      <div className="resumo-cards">
        <div className="card">
          <h2>Alunos</h2>
          <p>{resumo.totalAlunos}</p>
        </div>
        <div className="card">
          <h2>Instrutores</h2>
          <p>{resumo.totalInstrutores}</p>
        </div>
        <div className="card">
          <h2>Cursos</h2>
          <p>{resumo.totalCursos}</p>
        </div>
      </div>

      <div className="acoes-rapidas">
        <h3>Ações rápidas</h3>
        <button>Gerenciar Alunos</button>
        <button>Gerenciar Instrutores</button>
        <button>Gerenciar Cursos</button>
      </div>
    </div>
  );
}
