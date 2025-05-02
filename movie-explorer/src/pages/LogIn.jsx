function Login({ onLogin }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Тук можеш да добавиш проверка с API или локално
      onLogin(); // Задава потребителя като логнат
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    );
  }
  
  export default Login;