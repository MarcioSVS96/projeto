import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const quizzes = {
  1: {
    cursoNome: 'JavaScript para Iniciantes',
    perguntas: [
      {
        id: 1,
        pergunta: 'Qual comando exibe algo no console?',
        opcoes: ['print()', 'console.log()', 'echo()', 'printf()'],
        respostaCorreta: 'console.log()'
      },
      {
        id: 2,
        pergunta: 'Qual palavra-chave declara uma variável?',
        opcoes: ['var', 'int', 'let', 'string'],
        respostaCorreta: 'let'
      }
    ]
  },
  2: {
    cursoNome: 'React Completo',
    perguntas: [
      {
        id: 1,
        pergunta: 'Qual hook é usado para estado?',
        opcoes: ['useState', 'useEffect', 'useContext', 'useReducer'],
        respostaCorreta: 'useState'
      },
      {
        id: 2,
        pergunta: 'JSX é:',
        opcoes: [
          'Uma biblioteca',
          'Uma linguagem de programação',
          'Uma sintaxe para escrever HTML no JS',
          'Um framework'
        ],
        respostaCorreta: 'Uma sintaxe para escrever HTML no JS'
      }
    ]
  }
};

export default function QuizCurso() {
  const { id } = useParams();
  const navigate = useNavigate();

  const quiz = quizzes[id];

  const [respostas, setRespostas] = useState({});
  const [showResultado, setShowResultado] = useState(false);

  if (!quiz) return <p>Quiz não encontrado para este curso.</p>;

  const handleChange = (perguntaId, opcao) => {
    setRespostas(prev => ({ ...prev, [perguntaId]: opcao }));
  };

  const calcularNota = () => {
    let acertos = 0;
    quiz.perguntas.forEach(q => {
      if (respostas[q.id] === q.respostaCorreta) acertos++;
    });
    return acertos;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResultado(true);
  };

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem', background: '#fff', borderRadius: 8 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>← Voltar</button>
      <h1>Quiz: {quiz.cursoNome}</h1>

      {!showResultado ? (
        <form onSubmit={handleSubmit}>
          {quiz.perguntas.map(p => (
            <fieldset key={p.id} style={{ marginBottom: '1rem' }}>
              <legend>{p.pergunta}</legend>
              {p.opcoes.map(opcao => (
                <label key={opcao} style={{ display: 'block', margin: '0.25rem 0' }}>
                  <input
                    type="radio"
                    name={`pergunta-${p.id}`}
                    value={opcao}
                    checked={respostas[p.id] === opcao}
                    onChange={() => handleChange(p.id, opcao)}
                    required
                  />
                  {' '}
                  {opcao}
                </label>
              ))}
            </fieldset>
          ))}
          <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Enviar Respostas</button>
        </form>
      ) : (
        <div>
          <h2>Resultado</h2>
          <p>
            Você acertou {calcularNota()} de {quiz.perguntas.length} perguntas.
          </p>
          <button onClick={() => setShowResultado(false)} style={{ marginRight: 10 }}>
            Refazer Quiz
          </button>
          <button onClick={() => navigate('/dashboard')}>
            Voltar ao Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
