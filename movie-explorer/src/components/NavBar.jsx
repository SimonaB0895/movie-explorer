import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // по избор: можеш да създадеш css файл за стилизиране

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // по желание: можеш да изчистиш токен или да промениш auth state
    localStorage.removeItem('auth'); // ако ползваш localStorage
    navigate('/');
    window.location.reload(); // принудително "излизане" и рефреш
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Начало</Link></li>
        <li><Link to="/movies/1">Филми</Link></li>
        <li><Link to="/profile">Профил</Link></li>
        <li><button onClick={handleLogout}>Изход</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;