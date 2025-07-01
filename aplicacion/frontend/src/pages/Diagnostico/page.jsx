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
    if (!data) {
      alert('No hay diagnóstico disponible');
      navigate('/');
      return;
    }

    const parsed = JSON.parse(data);
    setDiagnostico(parsed);

    if (parsed.guardado) return;

    const userId = parseInt(localStorage.getItem('userId'), 10);
    if (!userId) {
      console.warn('Usuario no autenticado');
      return;
    }

    let plagaId = null;
    if (parsed.plaga?.toLowerCase().includes('trip')) plagaId = 1;
    else if (parsed.plaga?.toLowerCase().includes('araña')) plagaId = 2;

    if (!plagaId) {
      console.warn('Plaga desconocida, no se guardará en la BD');
      return;
    }

    fetch('https://api.granashield.com/diagnosticos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        plagaId,
        resultado: parsed.plaga,
        recomendacion: parsed.recomendacion,
        imagenUrl: parsed.imagen,
        fecha: parsed.fecha,
      }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Error al guardar diagnóstico');
        console.log('✅ Diagnóstico guardado');
        localStorage.setItem('mockDiagnostico', JSON.stringify({ ...parsed, guardado: true }));
      })
      .catch(err => console.error('❌ Error al guardar:', err.message));
  }, [navigate]);


  if (!diagnostico) return null;

  const fechaFormateada = new Date(diagnostico.fecha).toLocaleDateString('es-EC', {
    day: 'numeric',
    month: 'long'
  });

  const plaga = diagnostico.plaga?.toLowerCase();

  const renderInfoPlaga = () => {
    if (plaga === 'trips') {
      return (
        <>
          <h3>Trips (Frankliniella occidentalis)</h3>
          <p className="tipo-plaga">Tipo: Insecto chupador</p>
          <p><strong>Síntomas:</strong> Quemaduras en hojas, manchas plateadas, deformación de flores y frutos.</p>
          <p><strong>Daños:</strong> Reducción de área fotosintética, transmisión de virus, pérdida de calidad comercial.</p>
          <p><strong>Control preventivo:</strong> Monitoreo con trampas azules, eliminación de maleza, evitar el exceso de nitrógeno.</p>
          <p><strong>Control químico:</strong> Aplicar insecticidas del grupo 3A (piretroides) o 4A (neonicotinoides), con rotación de ingredientes activos.</p>
          <div className="control-organico">
            <h4>🌿 Control orgánico recomendado</h4>
            <p>
              Usa trampas adhesivas azules, extracto de ajo, jabón potásico, y depredadores naturales como <em>Orius insidiosus</em> y crisopas.
            </p>
          </div>
        </>
      );
    }

    if (plaga === 'araña') {
      return (
        <>
          <h3>Araña Roja (Tetranychus urticae)</h3>
          <p className="tipo-plaga">Tipo: Ácaro</p>
          <p><strong>Síntomas:</strong> Manchas amarillas en hojas, telarañas finas, debilitamiento general de la planta.</p>
          <p><strong>Daños:</strong> Caída de hojas, reducción de producción, debilitamiento total del cultivo en casos graves.</p>
          <p><strong>Control preventivo:</strong> Asegurar humedad adecuada, evitar estrés hídrico, rotación de cultivos.</p>
          <p><strong>Control químico:</strong> Aplicar acaricidas del grupo 1B (organofosforados) o aceites minerales, respetando los tiempos de carencia.</p>
          <div className="control-organico">
            <h4>🌿 Control orgánico recomendado</h4>
            <p>
              Usa <strong>azufre mojable</strong>, extracto de ajo, o depredadores como <em>Phytoseiulus persimilis</em> y <em>Amblyseius swirskii</em>.
            </p>
          </div>
        </>
      );
    }

    return (
      <p>No se encontró información específica para la plaga detectada.</p>
    );
  };

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
          {renderInfoPlaga()}
        </div>
      </div>

      <div className="recomendaciones-section">
        <h3>Resumen del modelo</h3>
        <p>{diagnostico.recomendacion}</p>
        <p><strong>Confianza del modelo:</strong> {Math.round(diagnostico.confianza * 100)}%</p>
      </div>
    </div>
  );
}
