import React, { useEffect, useState } from 'react';
import './Logros.css';
import { useTranslation } from 'react-i18next';
import MenuDesplegable from '../components/MenuDesplegable';
import { useNavigate } from 'react-router-dom';

export default function Logros() {
    const [logros, setLogros] = useState([]);
    const { t } = useTranslation();
    const userId = parseInt(localStorage.getItem('userId'), 10);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId) return;
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            alert(t('historial.noUser'));
            window.location.href = '/login';
            return;
        }

        setUser(storedUser);

        const fetchLogros = async () => {
            try {
                const res = await fetch(`https://api.granashield.com/achievements/${userId}`);
                const data = await res.json();
                setLogros(data);
            } catch (err) {
                console.error('❌ Error cargando logros:', err);
            }
        };

        fetchLogros();
    }, [userId]);

    return (
        <>
            <MenuDesplegable
                userName={user?.nombre}
                onNavigate={(seccion) => {
                    if (seccion === 'inicio') navigate('/agricultor');
                    if (seccion === 'historial') navigate('/historial');
                    if (seccion === 'trips') navigate('/plaga/trips');
                    if (seccion === 'arania') navigate('/plaga/arania');
                    if (seccion === 'logros') navigate('/logros');
                }}
            />
            <div className="logros-container">
                <h2 className="logros-title">🏅 {t('logros.title')}</h2>

                {logros.length === 0 ? (
                    <p className="sin-logros">{t('logros.noAchievements')}</p>
                ) : (
                    <div className="logros-grid">
                        {logros.map((logro) => (
                            <div key={logro.id} className="logro-card">
                                <h3>{logro.name}</h3>
                                <p className="logro-desc">{logro.description}</p>
                                <span className="logro-fecha">
                                    {new Date(logro.unlockedAt).toLocaleDateString('es-EC')}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
