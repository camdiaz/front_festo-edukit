import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Hook para redirección

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para redirección

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Envía la solicitud de inicio de sesión
      const response = await axios.post('http://localhost:3030/login', { username, password });

      // Almacena el token en localStorage
      localStorage.setItem('token', response.data.token);
      
      // Muestra una alerta de inicio de sesión exitoso
      alert('Login successful!');
      
      // Redirige a /level-tank
      navigate('/level-tank');
      
    } catch (err) {
      // Maneja errores de inicio de sesión
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Festo Edukit Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

