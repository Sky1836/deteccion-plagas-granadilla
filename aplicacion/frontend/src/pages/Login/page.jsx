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
  const [password, setPassword] = useState('');

  const auth = firebase.auth();

  const loginEmail = async () => {
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const token = await result.user.getIdToken();
      sendTokenToBackend(token);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const loginGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await auth.signInWithPopup(provider);
      const token = await result.user.getIdToken();
      sendTokenToBackend(token);
    } catch (err) {
      alert("Error con Google: " + err.message);
    }
  };

  const sendTokenToBackend = async (token) => {
    try {
      const res = await fetch('https://deteccion-plagas-granadilla-production.up.railway.app/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.user));

      const redirectUrl = data.user.rol === "ADMIN" ? "/admin" : "/agricultor";
      window.location.href = redirectUrl;
    } catch (err) {
      console.error("Error al conectar con backend:", err);
      alert("No se pudo conectar con el servidor");
    }
  };

  const recuperarContrasena = async () => {
    if (!email.trim()) {
      return alert("Ingresa tu correo para recuperar la contraseña");
    }
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Correo enviado. Revisa tu bandeja de entrada");
    } catch (error) {
      console.error("Error al enviar correo:", error);
      if (error.code === "auth/user-not-found") {
        alert("Este correo no está registrado", "blue");
      } else {
        alert("Hubo un error al enviar el correo. Intenta nuevamente");
      }
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
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='password-input'>
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a href="#" onClick={recuperarContrasena}>¿Olvidaste tu contraseña?</a>
          <button onClick={loginEmail}>Iniciar sesión</button>

          <span className='link-span'>¿No tienes cuenta? <a href='/register'>Regístrate</a></span>

          <div className='medium-ball'></div>

          <div className='separador'>
            <hr />
            <span>O</span>
            <hr />
          </div>

          <button className="google-btn" onClick={loginGoogle}>Entrar con Google</button>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
