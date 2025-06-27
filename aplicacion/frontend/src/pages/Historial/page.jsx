import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import MenuDesplegable from '../../components/MenuDesplegable';

export default function Historial() {
    const [diagnosticos, setDiagnosticos] = useState([]);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);


    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            alert('No hay usuario autenticado');
            window.location.href = '/login';
            return;
        }

        setUser(storedUser);

        fetch(`https://api.granashield.com/diagnosticos/buscar?userId=${storedUser.id}`)
            .then(res => res.json())
            .then(data => setDiagnosticos(data))
            .catch(err => {
                alert('Error cargando historial');
                console.error(err);
            });
    }, []);

    if (!diagnosticos.length) return <p className="mensaje-vacio">No hay diagnósticos guardados</p>;

    return (
        <>
            <MenuDesplegable
                userName={user?.nombre}
                onNavigate={(seccion) => {
                    if (seccion === 'inicio') return;
                    if (seccion === 'historial') navigate('/historial');
                    if (seccion === 'trips') alert("Trips aún no implementado");
                    if (seccion === 'hlb') alert("HLB aún no implementado");
                }}
            />
            <div className="historial-container">
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
        </>
    );
}
