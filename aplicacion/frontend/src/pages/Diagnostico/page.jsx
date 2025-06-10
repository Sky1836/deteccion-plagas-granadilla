import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Diagnostico() {
  const [diagnostico, setDiagnostico] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('mockDiagnostico');
    if (data) {
      setDiagnostico(JSON.parse(data));
    } else {
      alert('No hay diagnóstico disponible');
      navigate('/');
    }
  }, [navigate]);

  if (!diagnostico) return null;

  const fechaFormateada = new Date(diagnostico.fecha).toLocaleDateString('es-EC', {
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="diagnostico-container">
      <div className="diagnostico-header">
        <button onClick={() => navigate('/agricultor')} className="back-button">
          <FontAwesomeIcon icon={faChevronLeft} /> {fechaFormateada}
        </button>
        <h2 className="titulo-diagnostico">Resultado del diagnóstico</h2>
      </div>

      <div className="diagnostico-card">
        <img src={diagnostico.imagen} alt="captura" className="imagen-plaga" />
        <div className="info-plaga">
          <h3>{diagnostico.plaga}</h3>
          <p className="tipo-plaga">Insecto</p>
        </div>
      </div>

      <div className="recomendaciones-section">
        <h3>Recomendaciones</h3>
        <p>{diagnostico.recomendacion}</p>

        <div className="control-organico">
          <h4>🌿 Control orgánico</h4>
          <p>
            El ácaro depredador <strong>Euseius tularensis</strong>, las arañas, las crisopas y las chinchas pirata
            (<em>Orius insidiosus</em>) atacan a los trips de los cítricos. El E. tularensis es especialmente útil.
          </p>
        </div>
      </div>
    </div>
  );
}
