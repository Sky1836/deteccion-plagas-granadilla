import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/page';
import FarmerPage from './pages/Farmer/page';
import AdminPage from './pages/Admin/page'; // Asegúrate de que esta ruta sea correcta
import Diagnostico from './pages/Diagnostico/page';
import Historial from './pages/Historial/page';
import RegisterPage from './pages/Register/page';
import ResetPassword from './pages/ResetPassword/page';
import HandleAction from './pages/HandleAction/page';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HandleAction />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/agricultor" element={<FarmerPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path='/diagnostico' element={<Diagnostico />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
