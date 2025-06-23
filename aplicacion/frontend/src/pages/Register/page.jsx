import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

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

    const auth = firebase.auth();

    const mostrarMensaje = (texto, color = "red") => {
        setMsg({ text: texto, color });
    };

    const registrarUsuario = async () => {
        if (!nombre || !email || !password) {
            return mostrarMensaje("Todos los campos son obligatorios");
        }
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password);
            const token = await result.user.getIdToken();
            await fetch('https://deteccion-plagas-granadilla-production.up.railway.app/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token,
                    nombre,
                    email,
                    telefono,
                }),
            });
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify({ nombre, email, rol: "AGRICULTOR" }));
            window.location.href = "/agricultor";
        } catch (err) {
            mostrarMensaje("Error al registrar: " + err.message);
        }
    };

    return (
        <div className="login-box">
            <div className='left-container'>
                <h1>REGISTRO</h1>
                <h5>Accede a la tecnología para proteger tus cultivos</h5>
                <p>Esta plataforma está diseñada para ayudarte a identificar y tratar plagas de forma sencilla y precisa.</p>
                <div className='big-ball'></div>
                <div className='medium-ball'></div>
                <div className='small-ball'></div>
            </div>

            <div className='right-container'>
                <div className='login-container'>
                    <h2>Crea tu cuenta</h2>
                    <p>Ingresa tus datos para registrarte</p>

                    <div className='email-input  register'>
                        <FontAwesomeIcon icon={faUser} />
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className='email-input  register'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='email-input register'>
                        <FontAwesomeIcon icon={faPhone} />
                        <input
                            type="tel"
                            placeholder="Teléfono (opcional)"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
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

                    <button onClick={registrarUsuario}>Registrarse</button>

                    <p style={{ color: msg?.color || 'red' }}>{msg?.text}</p>
                    <div className='medium-ball'></div>
                    <span className='link-span'>¿Ya tienes cuenta? <a href='/login'>Iniciar sesión</a></span>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
