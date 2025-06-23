import React, { useEffect, useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Historial() {
    const [diagnosticos, setDiagnosticos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            alert('No hay usuario autenticado');
            window.location.href = '/login';
            return;
        }

        fetch(`https://deteccion-plagas-granadilla-production.up.railway.app/diagnosticos/buscar?userId=${storedUser.id}`)
            .then(res => res.json())
            .then(data => setDiagnosticos(data))
            .catch(err => {
                alert('Error cargando historial');
                console.error(err);
            });
    }, []);

    if (!diagnosticos.length) return <p className="mensaje-vacio">No hay diagnósticos guardados</p>;

    return (
        <div className="historial-container">
            <button onClick={() => navigate('/agricultor')} className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} /> Volver
            </button>
            <h2 className="historial-titulo">📜 Historial de Diagnósticos</h2>
            <div className="tarjetas-grid">
                {diagnosticos.map((d, i) => (
                    <div className="tarjeta-diagnostico animar" key={i}>
                        <p className="fecha">{new Date(d.fecha).toLocaleDateString('es-ES')}</p>
                        <p><strong>Resultado:</strong> {d.resultado}</p>
                        <p><strong>Plaga:</strong> {d.plaga?.nombre || "Desconocida"}</p>
                        <p><strong>Recomendación:</strong> {d.recomendacion || "—"}</p>
                        {d.imagenUrl && <img src={d.imagenUrl} alt="captura" className="miniatura" />}
                    </div>
                ))}
            </div>
        </div>
    );
}
