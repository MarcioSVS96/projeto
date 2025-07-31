import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CursoAulas.css';

const cursos = [
  {
    id: 1,
    nome: 'JavaScript para Iniciantes',
    aulas: [
      { id: 1, titulo: 'Introdução ao JS', duracao: '10min' },
      { id: 2, titulo: 'Variáveis e Tipos', duracao: '15min' },
      { id: 3, titulo: 'Funções', duracao: '20min' },
    ],
  },
  {
    id: 2,
    nome: 'React Completo',
    aulas: [
      { id: 1, titulo: 'Introdução ao React', duracao: '12min' },
      { id: 2, titulo: 'Componentes', duracao: '18min' },
      { id: 3, titulo: 'Hooks', duracao: '22min' },
    ],
  },
];

export default function CursoAulas() {
  const { id } = useParams();
  const navigate = useNavigate();

  const curso = cursos.find(c => c.id === parseInt(id));
  const [aulasConcluidas, setAulasConcluidas] = useState(() => {
    const saved = localStorage.getItem(`progresso_curso_${id}`);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(`progresso_curso_${id}`, JSON.stringify(aulasConcluidas));
  }, [aulasConcluidas, id]);

  if (!curso) return <p>Curso não encontrado.</p>;

  const toggleConcluida = (aulaId) => {
    setAulasConcluidas(prev => 
      prev.includes(aulaId) 
        ? prev.filter(id => id !== aulaId) 
        : [...prev, aulaId]
    );
  };

  const progressoPercentual = Math.round((aulasConcluidas.length / curso.aulas.length) * 100);

  return (
    <div className="curso-aulas-container">
      <header className="curso-aulas-header">
        <button onClick={() => navigate(-1)} className="curso-aulas-back-btn">← Voltar</button>
        <h1>{curso.nome}</h1>
      </header>
      <p className="curso-aulas-progress">Progresso: {progressoPercentual}%</p>
      <ul className="curso-aulas-list">
        {curso.aulas.map(aula => (
          <li key={aula.id}>
            <div>
              <strong>{aula.titulo}</strong><small>{` - ${aula.duracao}`}</small>
            </div>
            <div className="curso-aulas-checkbox">
              <label>
                <input 
                  type="checkbox" 
                  checked={aulasConcluidas.includes(aula.id)} 
                  onChange={() => toggleConcluida(aula.id)} 
                /> Concluída
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
