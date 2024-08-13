import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3030/api', // Cambia la URL según tu configuración
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
