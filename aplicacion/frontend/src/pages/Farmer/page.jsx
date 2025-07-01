import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import MenuDesplegable from '../../components/MenuDesplegable';

export default function FarmerPage() {
  const [user, setUser] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [preview, setPreview] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      alert('No hay usuario autenticado');
      window.location.href = '/login';
      return;
    }

    setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    if (showCamera && !preview) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => {
          alert("No se pudo acceder a la cámara");
          console.error(err);
        });
    }
  }, [showCamera, preview]);

  const cerrarCamara = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const abrirCamara = () => {
    cerrarCamara();
    setPreview(null);
    setShowCamera(true);
  };

  const capturarFoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL('image/jpeg');
    setPreview(dataUrl);
    cerrarCamara();
  };

  const aceptarDiagnostico = async () => {
    if (!preview) {
      alert('No hay imagen capturada');
      return;
    }

    try {
      // Convertir base64 a blob
      const blob = await fetch(preview).then(res => res.blob());

      // Armar formData
      const formData = new FormData();
      formData.append('file', blob, 'captura.jpg');

      // Enviar al backend NestJS (localhost o dominio real)
      const res = await fetch('https://api.granashield.com/detector', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!data.detecciones || data.detecciones.length === 0) {
        alert('No se detectaron plagas');
        return;
      }

      const plagaDetectada = data.detecciones[0]?.clase || 'Desconocida';

      const diagnostico = {
        resultado: `Plaga detectada: ${plagaDetectada}`,
        recomendacion: `Consultar tratamiento para ${plagaDetectada}`,
        plaga: plagaDetectada,
        confianza: data.detecciones[0].confianza,
        imagen: preview,
        fecha: new Date().toISOString(),
      };

      // Guardar para mostrar en vista Diagnóstico
      localStorage.setItem('capturedImage', preview);
      localStorage.setItem('mockDiagnostico', JSON.stringify(diagnostico));

      setShowCamera(false);
      navigate('/diagnostico');
    } catch (error) {
      console.error('Error al diagnosticar:', error);
      alert('Ocurrió un error al enviar la imagen');
    }
  };

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
      <div className='farmer-page'>

        <div className="camara-contenedor">
          <h3 className="titulo">Sane su cultivo</h3>
          <div className="pasos">
            <div className="paso"><div className="icono hoja" /><p>Tomar una<br />foto</p></div>
            <span className="flecha">➔</span>
            <div className="paso"><div className="icono diagnostico" /><p>Ver<br />diagnóstico</p></div>
            <span className="flecha">➔</span>
            <div className="paso"><div className="icono tratamiento" /><p>Obtener el<br />tratamiento</p></div>
          </div>
          <button className="boton-foto" onClick={abrirCamara}>Tomar una foto</button>
        </div>
        {showCamera && (
          <div className="pantalla-camara">
            {!preview ? (
              <>
                <video ref={videoRef} autoPlay playsInline muted className="video-camara" />
                <button className="boton-captura" onClick={capturarFoto}></button>
              </>
            ) : (
              <>
                <img src={preview} alt="captura" className="preview-img" />
                <div className="botones-acciones">
                  <button className="boton-repetir" onClick={abrirCamara}>Repetir</button>
                  <button className="boton-aceptar" onClick={aceptarDiagnostico}>Aceptar</button>
                </div>
              </>
            )}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
        )}
      </div>
    </>
  );
}
