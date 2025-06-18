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
          <h3>
            {diagnostico.plaga?.toLowerCase().includes('pulgon') ? 'Trips' : diagnostico.plaga}
          </h3>

          <p className="tipo-plaga">Insecto</p>
        </div>
      </div>

      <div className="recomendaciones-section">
        <h3>Recomendaciones</h3>
        <p>{diagnostico.recomendacion}</p>

        <p><strong>Confianza del modelo:</strong> {Math.round(diagnostico.confianza * 100)}%</p>

        {['trip', 'pulgon'].some(plaga =>
          diagnostico.plaga?.toLowerCase().includes(plaga)
        ) && (
            <div className="control-organico">
              <h4>🌿 Control orgánico para trips</h4>
              <p>
                El ácaro depredador <strong>Euseius tularensis</strong>, las crisopas y las chinches pirata
                (<em>Orius insidiosus</em>) son enemigos naturales. Puedes usar trampas adhesivas azules o extracto de ajo.
              </p>
            </div>
          )}


        {diagnostico.plaga?.toLowerCase().includes('mosca') && (
          <div className="control-organico">
            <h4>🌿 Control para mosca blanca</h4>
            <p>
              Usa <strong>Beauveria bassiana</strong> (hongo entomopatógeno), trampas amarillas y controla malezas cercanas.
            </p>
          </div>
        )}

        {diagnostico.plaga?.toLowerCase().includes('arana') && (
          <div className="control-organico">
            <h4>🌿 Control para ácaros (araña roja)</h4>
            <p>
              Se sugiere aplicar <strong>azufre mojable</strong> o extracto de ajo. También sirven depredadores como
              <em> Phytoseiulus persimilis</em>.
            </p>
          </div>
        )}

        {diagnostico.plaga?.toLowerCase().includes('picudo') && (
          <div className="control-organico">
            <h4>🌿 Control para picudo rojo</h4>
            <p>
              Se recomienda eliminar partes infectadas, usar trampas feromonales y aplicar hongos como <em>Beauveria bassiana</em>.
            </p>
          </div>
        )}

        {diagnostico.plaga?.toLowerCase().includes('mft') && (
          <div className="control-organico">
            <h4>🌿 Control sugerido para MFT</h4>
            <p>
              Usa trampas específicas según el tipo, controla maleza circundante y realiza monitoreo frecuente. Aún se investiga su impacto total.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
