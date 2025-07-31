import { useNavigate } from 'react-router-dom';
import './Courses.css';

export default function Courses() {
  const navigate = useNavigate();

  const cursos = [
    {
      id: 1,
      nome: 'JavaScript para Iniciantes',
      descricao: 'Aprenda os fundamentos da linguagem JavaScript moderna.'
    },
    {
      id: 2,
      nome: 'React Completo',
      descricao: 'Domine os conceitos de componentes, hooks e rotas.'
    },
    {
      id: 3,
      nome: 'Node.js com Express',
      descricao: 'Crie APIs robustas com Node e Express.'
    }
  ];

  const handleVoltar = () => {
    navigate('/dashboard');
  };

  return (
    <div className="courses-container">
      <header className="courses-header">
        <h1>Meus Cursos</h1>
        <button onClick={handleVoltar} className="back-btn">Voltar</button>
      </header>

      <div className="courses-grid">
        {cursos.map(curso => (
          <div key={curso.id} className="course-card">
            <h2>{curso.nome}</h2>
            <p>{curso.descricao}</p>
            <button onClick={() => navigate(`/curso/${curso.id}/aulas`)} style={{
                marginTop: '1.5rem',
                marginRight: '1rem',
                padding: '12px 20px',
                backgroundColor: '#2575fc',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>Aulas</button>
            <button 
              onClick={() => navigate(`/curso/${curso.id}/quiz`)} 
              style={{
                marginTop: '1.5rem',
                padding: '12px 20px',
                backgroundColor: '#2575fc',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Fazer Quiz do Curso
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}
