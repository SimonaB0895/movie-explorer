import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Тук може да добавиш логика за запис в JSON Server
    const user = { username, password };

    // Засега симулираме регистрация:
    localStorage.setItem('auth', JSON.stringify(user));
    navigate('/');
    window.location.reload();
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Регистрация</h2>
      <input
        type="text"
        placeholder="Потребителско име"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Парола"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Регистрация</button>
    </form>
  );
}

export default Register;