import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import TanksDisplay from './components/Tanks/TanksDisplay';

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica si hay un token en localStorage

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/level-tank" /> : <Login />} />
          <Route path="/level-tank" element={isAuthenticated ? <TanksDisplay /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

