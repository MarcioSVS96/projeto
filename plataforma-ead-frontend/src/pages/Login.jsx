import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Exemplo de login fake
    if (email === 'admin@ead.com' && password === '1234') {
      login({ email });
      navigate('/dashboard');
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
