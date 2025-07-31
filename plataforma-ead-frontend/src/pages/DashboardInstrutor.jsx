import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardInstrutor.css';

export default function DashboardInstrutor() {
  const navigate = useNavigate();

  const cursos = [
    { id: 1, titulo: "Curso de React", descricao: "Aprenda React do zero", aulas: 10 },
    { id: 2, titulo: "Curso de Node.js", descricao: "Backend com Node.js", aulas: 8 },
  ];

  const handleNovoCurso = () => {
    // redirecionar ou abrir modal
    alert("Função para adicionar novo curso");
  };

  const handleEditar = (id) => {
    alert(`Editar curso ID: ${id}`);
  };

  const handleExcluir = (id) => {
    alert(`Excluir curso ID: ${id}`);
  };

  return (
    <div className="dashboard-instrutor">
      <h2>Meus Cursos</h2>
      <button className="btn-adicionar" onClick={handleNovoCurso}>+ Novo Curso</button>
      <div className="lista-cursos">
        {cursos.map((curso) => (
          <div key={curso.id} className="card-curso">
            <h3>{curso.titulo}</h3>
            <p>{curso.descricao}</p>
            <p><strong>Aulas:</strong> {curso.aulas}</p>
            <div className="acoes">
              <button onClick={() => handleEditar(curso.id)}>Editar</button>
              <button onClick={() => handleExcluir(curso.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}