import { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await api.post('/auth/register', { email, password })
      alert('Cadastro realizado com sucesso!')
      navigate('/')
    } catch (err) {
      alert('Erro ao cadastrar: ' + err.response?.data?.message)
    }
  }

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register
