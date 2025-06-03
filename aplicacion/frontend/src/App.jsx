import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/page';
import FarmerPage from './pages/Farmer/page';
import AdminPage from './pages/Admin/page'; // Asegúrate de que esta ruta sea correcta
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/agricultor" element={<FarmerPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* Puedes agregar más rutas aquí según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
