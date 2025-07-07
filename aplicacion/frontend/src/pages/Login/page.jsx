import React, { useState } from 'react';
import './styles.css';
import firebase from 'firebase/compat/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import 'firebase/compat/auth';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
      const res = await fetch('https://api.granashield.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userId", data.user.id); // ← 👈 agrega esto

      const redirectUrl = data.user.rol === "ADMIN" ? "/admin" : "/agricultor";
      window.location.href = redirectUrl;
    } catch (err) {
      console.error("Error al conectar con backend:", err);
      alert(t('login.serverError'));
    }
  };

  const recuperarContrasena = async () => {
    if (!email.trim()) {
      return alert(t('login.enterEmailToRecover'));
    }
    try {
      await auth.sendPasswordResetEmail(email);
      alert(t('login.emailSent'));
    } catch (error) {
      console.error("Error al enviar correo:", error);
      if (error.code === "auth/user-not-found") {
        alert(t('login.userNotFound'));
      } else {
        alert(t('login.emailSendError'));
      }
    }
  };

  return (
    <div className="login-box">
      <div className='left-container'>
        <h1>{t('login.welcome')}</h1>
        <h5>{t('login.subtitle')}</h5>
        <p>{t('login.description')}</p>
        <div className='big-ball'></div>
        <div className='medium-ball'></div>
        <div className='small-ball'></div>
      </div>

      <div className='right-container'>
        <div className='login-container'>
          <h2>{t('login.title')}</h2>
          <p>{t('login.emailText')}</p>

          <div className='email-input'>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              placeholder={t('login.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='password-input'>
            <FontAwesomeIcon icon={faLock} />
            <input
              type="password"
              placeholder={t('login.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a href="#" onClick={recuperarContrasena}>{t('login.forgot')}</a>
          <button onClick={loginEmail}>{t('login.login')}</button>

          <span className='link-span'>{t('login.noAccount')} <a href='/register'>{t('login.register')}</a></span>

          <div className='medium-ball'></div>

          <div className='separador'>
            <hr />
            <span>{t('login.or')}</span>
            <hr />
          </div>

          <button className="google-btn" onClick={loginGoogle}>{t('login.google')}</button>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
