import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useAchievement } from '../../hooks/useAchievement';
import AchievementModal from '../../components/AchievementModal.jsx';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DiagnosticoPDF from '../../components/DiagnosticoPDF';

export default function Diagnostico() {
  const [diagnostico, setDiagnostico] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { achievement, unlockAchievement, clearAchievement } = useAchievement();

  useEffect(() => {
    let yaProcesado = false;

    const data = localStorage.getItem('mockDiagnostico');
    console.log('🧠 mockDiagnostico crudo desde localStorage:', data);

    if (!data) {
      alert(t('diagnostico.noData'));
      navigate('/');
      return;
    }

    const parsed = JSON.parse(data);
    console.log('📦 Diagnóstico parseado:', parsed);
    setDiagnostico(parsed);

    if (parsed.guardado) {
      console.log('📁 Diagnóstico ya guardado previamente, no se repetirá la operación.');
      return;
    }

    const userId = parseInt(localStorage.getItem('userId'), 10);
    console.log('👤 userId:', userId);
    if (!userId) {
      console.warn('⚠️ Usuario no autenticado, no se puede guardar diagnóstico');
      return;
    }

    let plagaId = null;
    if (parsed.plaga?.toLowerCase().includes('trip')) plagaId = 1;
    else if (parsed.plaga?.toLowerCase().includes('araña')) plagaId = 2;

    console.log('🪰 Plaga:', parsed.plaga, '→ plagaId:', plagaId);

    if (!plagaId) {
      console.warn('❌ Plaga desconocida, no se guardará en la BD');
      return;
    }

    const subirImagenAS3 = async () => {
      try {
        if (yaProcesado) return null;
        yaProcesado = true;

        console.log('📤 Subiendo imagen a S3:', parsed.imagen);
        const resBlob = await fetch(parsed.imagen);
        const blob = await resBlob.blob();
        const formData = new FormData();
        formData.append('file', blob, `captura.jpg`);

        const res = await fetch('https://api.granashield.com/upload/image', {
          method: 'POST',
          body: formData,
        });

        console.log('🧾 Respuesta de subida de imagen:', res.status);

        if (!res.ok) {
          const errorText = await res.text();
          console.error('❌ Fallo al subir imagen a S3:', errorText);
          throw new Error('Fallo al subir imagen a S3');
        }

        const result = await res.json();
        console.log('✅ Imagen subida con éxito. URL:', result.url);
        return result.url;
      } catch (err) {
        console.error('❌ Error subiendo imagen a S3:', err.message);
        return null;
      }
    };

    const guardarDiagnostico = async () => {
      const imagenUrl = await subirImagenAS3();
      if (!imagenUrl) {
        console.warn('⚠️ No se obtuvo URL de imagen, se detiene el guardado.');
        return;
      }

      const payload = {
        userId,
        plagaId,
        resultado: parsed.plaga,
        recomendacion: parsed.recomendacion,
        imagenUrl,
        fecha: parsed.fecha,
      };

      console.log('📦 Payload a enviar a /diagnosticos:', payload);

      try {
        const res = await fetch('https://api.granashield.com/diagnosticos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const responseText = await res.text();
        console.log('📥 Respuesta al guardar diagnóstico:', res.status, responseText);

        if (!res.ok) throw new Error('Error al guardar diagnóstico');

        console.log('✅ Diagnóstico guardado correctamente en el backend.');
        localStorage.setItem('mockDiagnostico', JSON.stringify({ ...parsed, guardado: true }));
        await unlockAchievement({
          userId,
          name: 'Primer diagnóstico',
          description: 'Has registrado tu primer diagnóstico de plaga.',
          icon: '/badges/diagnostico1.png',
        });

      } catch (err) {
        console.error('❌ Error al guardar diagnóstico:', err.message);
      }
    };

    guardarDiagnostico();

    // cleanup opcional si usas el modo estricto
    return () => {
      yaProcesado = true;
    };
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
    <>
      {achievement && (
        <AchievementModal achievement={achievement} onClose={clearAchievement} />
      )}

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
          <p><strong>{t('diagnostico.confidence')}</strong> {diagnostico.confianza}%</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <PDFDownloadLink
          document={<DiagnosticoPDF diagnostico={diagnostico} />}
          fileName={`diagnostico-${diagnostico.fecha}.pdf`}
          className="boton-descargar"
        >
          {({ loading }) => (loading ? 'Generando PDF...' : '📄 Descargar diagnóstico en PDF')}
        </PDFDownloadLink>
      </div>

    </>
  );
}
