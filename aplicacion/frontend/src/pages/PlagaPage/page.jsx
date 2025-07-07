import React from 'react';
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import MenuDesplegable from '../../components/MenuDesplegable';
import { useTranslation } from 'react-i18next';

export default function PlagaPage() {
    const { tipo } = useParams();
    const { t } = useTranslation();
    const info = t(`plagas.${tipo}`, { returnObjects: true });
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!info?.nombre) return <div className="plaga-container error">{t('plaga.notFound')}</div>;

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
            <div className="plaga-container">
                <h1 className="titulo">{info.nombre}</h1>
                <p className="descripcion">{info.descripcion}</p>

                <section>
                    <h2>{t('plaga.symptoms')}</h2>
                    <ul>{info.sintomas.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </section>

                <section>
                    <h2>{t('plaga.insecticides')}</h2>
                    <ul>{info.insecticidas.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </section>

                <section>
                    <h2>{t('plaga.season')}</h2>
                    <p>{info.epocas}</p>
                </section>

                <section>
                    <h2>{t('plaga.prevention')}</h2>
                    <ul>{info.prevencion.map((p, idx) => <li key={idx}>{p}</li>)}</ul>
                </section>

                <section className="imagenes-section">
                    <h2>{t('plaga.images')}</h2>
                    <div className="imagenes">
                        {info.imagenes.map((src, idx) => (
                            <img key={idx} src={src} alt={`Imagen ${idx + 1}`} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
