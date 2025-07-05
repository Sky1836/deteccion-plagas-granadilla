import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function Diagnostico() {
  const [diagnostico, setDiagnostico] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const data = localStorage.getItem('mockDiagnostico');
    if (!data) {
      alert(t('diagnostico.noData'));
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

    const subirImagenAS3 = async () => {
      try {
        const resBlob = await fetch(parsed.imagen);
        const blob = await resBlob.blob();
        const formData = new FormData();
        formData.append('file', blob, `captura.jpg`);

        const res = await fetch('https://api.granashield.com/upload/image', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) throw new Error('Fallo al subir imagen a S3');

        const { url } = await res.json();
        return url;
      } catch (err) {
        console.error('❌ Error subiendo imagen a S3:', err.message);
        return null;
      }
    };

    const guardarDiagnostico = async () => {
      const imagenUrl = await subirImagenAS3();
      if (!imagenUrl) return;

      try {
        const res = await fetch('https://api.granashield.com/diagnosticos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            plagaId,
            resultado: parsed.plaga,
            recomendacion: parsed.recomendacion,
            imagenUrl,
            fecha: parsed.fecha,
          }),
        });

        if (!res.ok) throw new Error('Error al guardar diagnóstico');

        console.log('✅ Diagnóstico guardado');
        localStorage.setItem('mockDiagnostico', JSON.stringify({ ...parsed, guardado: true }));
      } catch (err) {
        console.error('❌ Error al guardar diagnóstico:', err.message);
      }
    };

    guardarDiagnostico();
  }, [navigate, t]);

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
          <h3>{t('diagnostico.trips.title')}</h3>
          <p className="tipo-plaga">{t('diagnostico.trips.type')}</p>
          <p><strong>{t('diagnostico.trips.symptoms')}</strong></p>
          <p><strong>{t('diagnostico.trips.damage')}</strong></p>
          <p><strong>{t('diagnostico.trips.prevention')}</strong></p>
          <p><strong>{t('diagnostico.trips.chemical')}</strong></p>
          <div className="control-organico">
            <h4>{t('diagnostico.trips.organicTitle')}</h4>
            <p>{t('diagnostico.trips.organic')}</p>
          </div>
        </>
      );
    }

    if (plaga === 'araña') {
      return (
        <>
          <h3>{t('diagnostico.arania.title')}</h3>
          <p className="tipo-plaga">{t('diagnostico.arania.type')}</p>
          <p><strong>{t('diagnostico.arania.symptoms')}</strong></p>
          <p><strong>{t('diagnostico.arania.damage')}</strong></p>
          <p><strong>{t('diagnostico.arania.prevention')}</strong></p>
          <p><strong>{t('diagnostico.arania.chemical')}</strong></p>
          <div className="control-organico">
            <h4>{t('diagnostico.arania.organicTitle')}</h4>
            <p>{t('diagnostico.arania.organic')}</p>
          </div>
        </>
      );
    }

    return <p>{t('diagnostico.noInfo')}</p>;
  };

  return (
    <div className="diagnostico-container">
      <div className="diagnostico-header">
        <button onClick={() => navigate('/agricultor')} className="back-button">
          <FontAwesomeIcon icon={faChevronLeft} /> {fechaFormateada}
        </button>
        <h2 className="titulo-diagnostico">{t('diagnostico.title')}</h2>
      </div>

      <div className="diagnostico-card">
        <img src={diagnostico.imagen} alt="captura" className="imagen-plaga" />
        <div className="info-plaga">
          {renderInfoPlaga()}
        </div>
      </div>

      <div className="recomendaciones-section">
        <h3>{t('diagnostico.summary')}</h3>
        <p>{diagnostico.recomendacion}</p>
        <p><strong>{t('diagnostico.confidence')}</strong> {Math.round(diagnostico.confianza * 100)}%</p>
      </div>
    </div>
  );
}
