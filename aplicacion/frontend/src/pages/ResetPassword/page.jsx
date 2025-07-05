import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './styles.css';
import { useTranslation } from 'react-i18next';

const ResetPassword = () => {
    const [oobCode, setOobCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [msg, setMsg] = useState({ text: '', color: 'red' });
    const [done, setDone] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('oobCode');
        if (!code) {
            setMsg({ text: t('reset.invalid'), color: 'red' });
        } else {
            setOobCode(code);
        }
    }, [t]);

    const handleReset = async () => {
        if (newPassword.length < 6) {
            return setMsg({ text: t('reset.short'), color: 'red' });
        }

        try {
            await firebase.auth().confirmPasswordReset(oobCode, newPassword);
            setDone(true);
            setMsg({ text: t('reset.success'), color: 'green' });
        } catch (error) {
            console.error(error);
            setMsg({ text: t('reset.error'), color: 'red' });
        }
    };

    return (
        <div className="reset-box">
            <h2>{t('reset.title')}</h2>
            <p>{t('reset.subtitle')}</p>

            {!done && (
                <>
                    <input
                        type="password"
                        placeholder={t('reset.placeholder')}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button onClick={handleReset}>{t('reset.submit')}</button>
                </>
            )}

            {done && <a href="/login">{t('reset.back')}</a>}
            <p style={{ color: msg.color }}>{msg.text}</p>
        </div>
    );
};

export default ResetPassword;
