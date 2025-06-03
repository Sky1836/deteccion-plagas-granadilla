'use client';
import React, { useState } from 'react';
import './styles.css';
import firebase from 'firebase/compat/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import 'firebase/compat/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDmq96wgClrtqs4zu4Ns0Ci5-T9zgiqnW0",
    authDomain: "granadilla-93b10.firebaseapp.com",
    projectId: "granadilla-93b10",
    appId: "1:530799065336:web:68ba547887ac0a5399630d",
  });
}

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [regForm, setRegForm] = useState({
    name: '',
    phone: '',
    password: '',
    confirm: '',
  });

  const auth = firebase.auth();

  const mostrarMensaje = (texto, color = "red") => {
    setMsg({ text: texto, color });
  };

  const checkEmail = async () => {
    if (!email.trim()) return mostrarMensaje("Escribe tu correo");
    const res = await fetch("http://localhost:3000/auth/check-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.exists) {
      setShowPassword(true);
      mostrarMensaje("Correo encontrado, ingresa tu contraseña", "green");
    } else {
      setShowRegister(true);
      mostrarMensaje("Correo no registrado, completa el formulario", "blue");
    }
  };

  const loginEmail = async () => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const token = await result.user.getIdToken();
      sendTokenToBackend(token);
    } catch (err) {
      mostrarMensaje("Error: " + err.message);
    }
  };

  const registerUser = async () => {
    const { name, phone, password, confirm } = regForm;
    if (!name || !phone || !password || !confirm)
      return mostrarMensaje("Completa todos los campos");

    if (password !== confirm)
      return mostrarMensaje("Las contraseñas no coinciden");

    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName: name });
      const token = await result.user.getIdToken();
      sendTokenToBackend(token);
    } catch (err) {
      mostrarMensaje("Error: " + err.message);
    }
  };

  const loginGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      const token = await result.user.getIdToken();
      sendTokenToBackend(token);
    } catch (err) {
      mostrarMensaje("Error con Google: " + err.message);
    }
  };

  const sendTokenToBackend = async (token) => {
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.user));

      const redirectUrl = data.user.rol === "ADMIN"
        ? "/admin"
        : "/agricultor";
      window.location.href = redirectUrl;
    } catch (err) {
      console.error("Error al conectar con backend:", err);
      mostrarMensaje("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="login-box">
      <div className='left-container'>
        <h1>BIENVENIDO</h1>
        <h5>Transforma tu cultivo con tecnología</h5>
        <p>Esta aplicación te ayuda a detectar plagas de forma automática y tomar decisiones acertadas para proteger tu granadilla.</p>
        <div className='big-ball'></div>
        <div className='medium-ball'></div>
        <div className='small-ball'></div>
      </div>
      <div className='right-container'>
        <div className='login-container'>

          <h2>Iniciar sesión</h2>
          <p>Ingresa con tu correo electrónico y contraseña</p>

          <div className='email-input'>
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='password-input'>
            <FontAwesomeIcon icon={faLock} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <a href="#" onClick={checkEmail}>¿Olvidaste tu contraseña?</a>
          <button onClick={loginEmail}>Iniciar sesión</button>

          <div className='medium-ball'></div>

          <div className='separador'>
            <hr />
            <span>O</span>
            <hr />
          </div>

          {showRegister && (
            <div id="register-form">
              <input type="email" value={email} disabled />
              <input type="text" placeholder="Nombre completo" onChange={e => setRegForm({ ...regForm, name: e.target.value })} />
              <input type="text" placeholder="Teléfono" onChange={e => setRegForm({ ...regForm, phone: e.target.value })} />
              <input type="password" placeholder="Contraseña" onChange={e => setRegForm({ ...regForm, password: e.target.value })} />
              <input type="password" placeholder="Repetir contraseña" onChange={e => setRegForm({ ...regForm, confirm: e.target.value })} />
              <button onClick={registerUser}>Registrarse</button>
            </div>
          )}

          <button className="google-btn" onClick={loginGoogle}>Entrar con Google</button>

          <p>
            ¿No tienes cuenta? <a href="#" onClick={() => setShowRegister(!showRegister)}>Regístrate</a>
          </p>
          <p style={{ color: msg?.color || 'red' }}>{msg?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
