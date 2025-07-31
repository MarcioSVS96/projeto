import { useState } from 'react';
import { useUsers } from '../contexts/UsersContext';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const { addUser, users } = useUsers();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const userExists = users.some(user => user.email === email);
    if (userExists) {
      setError('Email já cadastrado.');
      return;
    }

    addUser({ email, password });
    alert('Cadastro realizado com sucesso! Faça login.');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Cadastro de Aluno</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
            value={password}
            required
          />
          <input
            type="password"
            placeholder="Confirme a Senha"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
          {error && <p className="error-msg">{error}</p>}
          <button type="submit">Cadastrar</button>
        </form>
        <button
          className="back-btn"
          onClick={() => navigate('/login')}
          style={{ marginTop: '15px' }}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
