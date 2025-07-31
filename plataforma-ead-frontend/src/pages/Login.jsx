import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useUsers } from '../contexts/UsersContext';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const { login } = useAuth();
  const { findUser } = useUsers();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const user = findUser(email.trim(), password);
    if (user) {
      login({ email: user.email, role: user.role });
      navigate('/dashboard');
    } else {
      setError('Credenciais inválidas!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          {error && <p className="error-msg">{error}</p>}
          <button type="submit">Entrar</button>
        </form>
        <p className="register-link">
          Não tem uma conta?{' '}
          <Link to="/register" className="link">
            Registre-se aqui
          </Link>
        </p>
      </div>
    </div>
  );
}
