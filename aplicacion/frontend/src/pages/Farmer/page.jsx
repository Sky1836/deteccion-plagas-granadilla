import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function FarmerPage() {
  const [user, setUser] = useState(null);
  const [plagas, setPlagas] = useState([]);
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
    cargarPlagas();
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

  const cargarPlagas = async () => {
    try {
      const res = await fetch('http://localhost:3000/plagas');
      const data = await res.json();
      setPlagas(data);
    } catch (err) {
      console.error("Error al cargar plagas:", err);
    }
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

  const aceptarDiagnostico = () => {
    if (!preview || plagas.length === 0) {
      alert('No hay imagen o plagas cargadas');
      return;
    }

    const plaga = plagas[Math.floor(Math.random() * plagas.length)];
    const diagnostico = {
      resultado: `Posible presencia de ${plaga?.nombre || 'una plaga desconocida'}`,
      recomendacion: `Consultar manejo recomendado para ${plaga?.nombre || 'esta plaga'}`,
      plaga: plaga?.nombre || 'Desconocida',
      imagen: preview,
      fecha: new Date().toISOString(),
    };
    localStorage.setItem('capturedImage', preview);
    localStorage.setItem('mockDiagnostico', JSON.stringify(diagnostico));
    setShowCamera(false);
    navigate('/diagnostico');
  };

  return (
    <div className='farmer-page'>
      <h1>Bienvenido, <b>{user?.nombre || 'Cargando...'}</b></h1>

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

      <div className='card'><p>Ver historial de consultas</p><FontAwesomeIcon icon={faChevronRight} className="icono-flecha" /></div>
      <div className='card'><p>Trips de cítricos</p><FontAwesomeIcon icon={faChevronRight} className="icono-flecha" /></div>
      <div className='card'><p>Huanglongbing (HLB) de los cítricos</p><FontAwesomeIcon icon={faChevronRight} className="icono-flecha" /></div>

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
  );
}
