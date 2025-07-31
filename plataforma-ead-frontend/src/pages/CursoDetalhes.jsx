import { useParams, useNavigate } from 'react-router-dom';
import './CursoDetalhes.css';

export default function CursoDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const cursos = [
    {
      id: 1,
      nome: 'JavaScript para Iniciantes',
      descricao: 'Aprenda os fundamentos da linguagem JavaScript moderna.',
      conteudo: 'Variáveis, funções, objetos, DOM, eventos...'
    },
    {
      id: 2,
      nome: 'React Completo',
      descricao: 'Domine os conceitos de componentes, hooks e rotas.',
      conteudo: 'useState, useEffect, Router, Context...'
    },
    {
      id: 3,
      nome: 'Node.js com Express',
      descricao: 'Crie APIs robustas com Node e Express.',
      conteudo: 'Rotas, middleware, controllers, REST API...'
    }
  ];

  const curso = cursos.find(c => c.id === parseInt(id));

  if (!curso) {
    return <p>Curso não encontrado.</p>;
  }

  return (
    <div className="curso-detalhes">
      <button onClick={() => navigate(-1)} className="back-btn">← Voltar</button>
      <h1>{curso.nome}</h1>
      <p>{curso.descricao}</p>
      <h3>Conteúdo do Curso</h3>
      <p>{curso.conteudo}</p>
    </div>
  );
}