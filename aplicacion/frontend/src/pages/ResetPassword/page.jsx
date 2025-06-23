import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './styles.css';

const ResetPassword = () => {
    const [oobCode, setOobCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [msg, setMsg] = useState({ text: '', color: 'red' });
    const [done, setDone] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('oobCode');
        if (!code) {
            setMsg({ text: 'Enlace inválido o expirado', color: 'red' });
        } else {
            setOobCode(code);
        }
    }, []);

    const handleReset = async () => {
        if (newPassword.length < 6) {
            return setMsg({ text: 'La contraseña debe tener al menos 6 caracteres', color: 'red' });
        }

        try {
            await firebase.auth().confirmPasswordReset(oobCode, newPassword);
            setDone(true);
            setMsg({ text: 'Contraseña actualizada correctamente. Ahora puedes iniciar sesión.', color: 'green' });
        } catch (error) {
            console.error(error);
            setMsg({ text: 'Error al cambiar la contraseña. Intenta nuevamente.', color: 'red' });
        }
    };

    return (
        <div className="reset-box">
            <h2>Restablecer contraseña</h2>
            <p>Ingresa tu nueva contraseña</p>

            {!done && (
                <>
                    <input
                        type="password"
                        placeholder="Nueva contraseña"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button onClick={handleReset}>Cambiar contraseña</button>
                </>
            )}

            {done && <a href="/login">Volver al login</a>}
            <p style={{ color: msg.color }}>{msg.text}</p>
        </div>
    );
};

export default ResetPassword;
