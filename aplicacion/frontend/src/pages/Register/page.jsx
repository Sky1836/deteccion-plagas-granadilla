import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDmq96wgClrtqs4zu4Ns0Ci5-T9zgiqnW0",
        authDomain: "granadilla-93b10.firebaseapp.com",
        projectId: "granadilla-93b10",
        appId: "1:530799065336:web:68ba547887ac0a5399630d",
    });
}

const RegisterPage = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const { t } = useTranslation();

    const auth = firebase.auth();

    const mostrarMensaje = (texto, color = "red") => {
        setMsg({ text: texto, color });
    };

    const registrarUsuario = async () => {
        if (!nombre || !email || !password) {
            return mostrarMensaje(t('register.required'));
        }
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password);
            const token = await result.user.getIdToken();
            await fetch('https://api.granashield.com/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, nombre, email, telefono }),
            });
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify({ nombre, email, rol: "AGRICULTOR" }));
            window.location.href = "/agricultor";
        } catch (err) {
            mostrarMensaje(`${t('register.error')}: ${err.message}`);
        }
    };

    return (
        <div className="login-box">
            <div className='left-container'>
                <h1>{t('register.title')}</h1>
                <h5>{t('register.subtitle')}</h5>
                <p>{t('register.description')}</p>
                <div className='big-ball'></div>
                <div className='medium-ball'></div>
                <div className='small-ball'></div>
            </div>

            <div className='right-container'>
                <div className='login-container'>
                    <h2>{t('register.formTitle')}</h2>
                    <p>{t('register.formSubtitle')}</p>

                    <div className='email-input register'>
                        <FontAwesomeIcon icon={faUser} />
                        <input
                            type="text"
                            placeholder={t('register.fullName')}
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className='email-input register'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                            type="email"
                            placeholder={t('register.email')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='email-input register'>
                        <FontAwesomeIcon icon={faPhone} />
                        <input
                            type="tel"
                            placeholder={t('register.phone')}
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>

                    <div className='password-input'>
                        <FontAwesomeIcon icon={faLock} />
                        <input
                            type="password"
                            placeholder={t('register.password')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button onClick={registrarUsuario}>{t('register.submit')}</button>

                    <p style={{ color: msg?.color || 'red' }}>{msg?.text}</p>
                    <div className='medium-ball'></div>
                    <span className='link-span'>{t('register.loginLink')} <a href='/login'>{t('register.loginAction')}</a></span>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
