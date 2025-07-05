import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import MenuDesplegable from '../../components/MenuDesplegable';
import { useTranslation } from 'react-i18next';

export default function Historial() {
    const [diagnosticos, setDiagnosticos] = useState([]);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            alert(t('historial.noUser'));
            window.location.href = '/login';
            return;
        }

        setUser(storedUser);

        fetch(`https://api.granashield.com/diagnosticos/buscar?userId=${storedUser.id}`)
            .then(res => res.json())
            .then(data => setDiagnosticos(data))
            .catch(err => {
                alert(t('historial.errorLoad'));
                console.error(err);
            });
    }, [t]);

    if (!diagnosticos.length) {
        return <>
            <MenuDesplegable
                userName={user?.nombre}
                onNavigate={(seccion) => {
                    if (seccion === 'inicio') navigate('/agricultor');
                    if (seccion === 'historial') navigate('/historial');
                    if (seccion === 'trips') navigate('/plaga/trips');
                    if (seccion === 'arania') navigate('/plaga/arania');
                }}
            />
            <p className="mensaje-vacio">{t('historial.noData')}</p>;
        </>
    }

    return (
        <>
            <MenuDesplegable
                userName={user?.nombre}
                onNavigate={(seccion) => {
                    if (seccion === 'inicio') navigate('/agricultor');
                    if (seccion === 'historial') navigate('/historial');
                    if (seccion === 'trips') navigate('/plaga/trips');
                    if (seccion === 'arania') navigate('/plaga/arania');
                }}
            />
            <div className="historial-container">
                <h2 className="historial-titulo">{t('historial.title')}</h2>
                <div className="tarjetas-grid">
                    {diagnosticos.map((d, i) => (
                        <div className="tarjeta-diagnostico animar" key={i}>
                            <p className="fecha">{new Date(d.fecha).toLocaleDateString('es-ES')}</p>
                            <p><strong>{t('historial.result')}:</strong> {d.resultado}</p>
                            <p><strong>{t('historial.plague')}:</strong> {d.plaga?.nombre || t('historial.unknown')}</p>
                            <p><strong>{t('historial.recommendation')}:</strong> {d.recomendacion || t('historial.none')}</p>
                            {d.imagenUrl && <img src={d.imagenUrl} alt="captura" className="miniatura" />}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
