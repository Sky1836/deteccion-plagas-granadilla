import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

export default function FarmerPage() {
  const [user, setUser] = useState(null);
  const [plagas, setPlagas] = useState([]);
  const [diagnosticos, setDiagnosticos] = useState([]);
  const [imageData, setImageData] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      alert('No hay usuario autenticado');
      window.location.href = '/login';
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

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

    cargarPlagas();
    cargarDiagnosticos(parsedUser.id);
  }, []);

  const cargarPlagas = async () => {
    try {
      const res = await fetch('http://localhost:3000/plagas');
      const data = await res.json();
      setPlagas(data);
    } catch (err) {
      console.error("Error al cargar plagas:", err);
    }
  };

  const cargarDiagnosticos = async (userId) => {
    try {
      const res = await fetch(`http://localhost:3000/diagnosticos/buscar?userId=${userId}`);
      const data = await res.json();
      setDiagnosticos(data);
    } catch (err) {
      console.error("Error cargando historial:", err);
    }
  };

  const capturarFoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg');
      setImageData(dataUrl);
    }
  };

  const enviarDiagnostico = async () => {
    if (!user || !imageData || plagas.length === 0) return;

    const plaga = plagas[Math.floor(Math.random() * plagas.length)];

    const dto = {
      userId: user.id,
      plagaId: plaga.id,
      resultado: `Posible presencia de ${plaga.nombre}`,
      recomendacion: `Consultar manejo recomendado para ${plaga.nombre}`,
      imagenUrl: imageData,
      fecha: new Date().toISOString().split("T")[0],
    };

    try {
      const res = await fetch("http://localhost:3000/diagnosticos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });

      if (!res.ok) throw new Error("Error al guardar diagnóstico");
      await cargarDiagnosticos(user.id);
      alert("✅ Diagnóstico generado automáticamente");
      setImageData(null);
    } catch (err) {
      alert("Error: " + err.message);
      console.error(err);
    }
  };

  return (
    <div className='farmer-page'>
      <div className="card">
        <h2>👨‍🌾 Perfil del Agricultor</h2>
        <p><strong>Nombre:</strong> {user?.nombre || 'Cargando...'}</p>
        <p><strong>Email:</strong> {user?.email || 'Cargando...'}</p>
        <p><strong>Teléfono:</strong> {user?.telefono || 'No registrado'}</p>
        <p><strong>Rol:</strong> {user?.rol || 'Cargando...'}</p>
        <p><strong>Registrado el:</strong> {user ? new Date(user.createdAt).toLocaleDateString() : 'Cargando...'}</p>
      </div>

      <div className="card">
        <h2>📷 Tomar Foto del Cultivo</h2>
        <video ref={videoRef} autoPlay playsInline />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {imageData && <img id="preview" src={imageData} alt="captura" />}
        <button onClick={capturarFoto}>Tomar Foto</button>
        {imageData && <button onClick={enviarDiagnostico}>Detectar Plaga</button>}
      </div>

      <div className="card">
        <h2>📄 Historial de Diagnósticos</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Resultado</th>
              <th>Plaga</th>
              <th>Recomendación</th>
            </tr>
          </thead>
          <tbody>
            {diagnosticos.map((d, i) => (
              <tr key={i}>
                <td>{new Date(d.fecha).toLocaleDateString()}</td>
                <td>{d.resultado}</td>
                <td>{d.plaga?.nombre || "Desconocida"}</td>
                <td>{d.recomendacion || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
