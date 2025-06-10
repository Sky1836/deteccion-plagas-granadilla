// Admin/page.jsx
import React, { useState } from 'react';
import './styles.css';

const urlBase = 'http://localhost:3000';

export default function AdminPanel() {
    const [vista, setVista] = useState('');
    const [plagas, setPlagas] = useState([]);
    const [insecticidas, setInsecticidas] = useState([]);
    const [diagnosticos, setDiagnosticos] = useState([]);
    const [plagasSelect, setPlagasSelect] = useState([]);

    const cambiarVista = (e) => {
        const value = e.target.value;
        setVista(value);
        if (value === 'plagas') cargarPlagas();
        if (value === 'insecticidas') {
            cargarPlagasSelect();
            cargarInsecticidas();
        }
        if (value === 'diagnosticos') cargarDiagnosticos();
    };

    const cargarPlagas = async () => {
        const res = await fetch(`${urlBase}/plagas`);
        const data = await res.json();
        setPlagas(data);
    };

    const cargarPlagasSelect = async () => {
        const res = await fetch(`${urlBase}/plagas`);
        const data = await res.json();
        setPlagasSelect(data);
    };

    const cargarInsecticidas = async () => {
        const res = await fetch(`${urlBase}/insecticidas`);
        const data = await res.json();
        setInsecticidas(data);
    };

    const cargarDiagnosticos = async () => {
        const res = await fetch(`${urlBase}/diagnosticos`);
        const data = await res.json();
        const enriquecidos = await Promise.all(
            data.map(async (d) => {
                try {
                    const resUser = await fetch(`${urlBase}/users/${d.userId}`);
                    const usuario = await resUser.json();
                    return { ...d, agricultor: usuario.nombre || 'No registrado' };
                } catch {
                    return { ...d, agricultor: 'No registrado' };
                }
            })
        );
        setDiagnosticos(enriquecidos);
    };

    const submitPlaga = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        await fetch(`${urlBase}/plagas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        e.target.reset();
        cargarPlagas();
    };

    const submitInsecticida = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        data.plagaId = Number(data.plagaId);
        await fetch(`${urlBase}/insecticidas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        e.target.reset();
        cargarInsecticidas();
    };

    return (
        <div className="admin-container">
            <h1>Panel de Administración</h1>
            <select onChange={cambiarVista} value={vista}>
                <option value="">Selecciona una opción</option>
                <option value="plagas">Gestionar Plagas</option>
                <option value="insecticidas">Gestionar Insecticidas</option>
                <option value="diagnosticos">Ver Diagnósticos</option>
            </select>

            {vista === 'plagas' && (
                <>
                    <form onSubmit={submitPlaga} className="form">
                        <h2>Agregar Plaga</h2>
                        <label>Nombre: <input type="text" name="nombre" required /></label>
                        <label>Descripción: <input type="text" name="descripcion" required /></label>
                        <label>Tipo: <input type="text" name="tipo" required /></label>
                        <button type="submit">Guardar Plaga</button>
                    </form>
                    <div className="seccion">
                        <h2>Plagas Registradas</h2>
                        <table><thead><tr><th>ID</th><th>Nombre</th><th>Tipo</th></tr></thead><tbody>
                            {plagas.map(p => <tr key={p.id}><td>{p.id}</td><td>{p.nombre}</td><td>{p.tipo}</td></tr>)}
                        </tbody></table>
                    </div>
                </>
            )}

            {vista === 'insecticidas' && (
                <>
                    <form onSubmit={submitInsecticida} className="form">
                        <h2>Agregar Insecticida</h2>
                        <label>Nombre: <input type="text" name="nombre" required /></label>
                        <label>Compuesto: <input type="text" name="compuesto" required /></label>
                        <label>Aplicación: <input type="text" name="aplicacion" required /></label>
                        <label>Plaga:
                            <select name="plagaId">
                                {plagasSelect.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
                            </select>
                        </label>
                        <button type="submit">Guardar Insecticida</button>
                    </form>
                    <div className="seccion">
                        <h2>Insecticidas Registrados</h2>
                        <table><thead><tr><th>ID</th><th>Nombre</th><th>Plaga</th></tr></thead><tbody>
                            {insecticidas.map(i => <tr key={i.id}><td>{i.id}</td><td>{i.nombre}</td><td>{i.plaga?.nombre || '-'}</td></tr>)}
                        </tbody></table>
                    </div>
                </>
            )}

            {vista === 'diagnosticos' && (
                <div className="seccion">
                    <h2>Historial de Diagnósticos</h2>
                    <table><thead><tr><th>Fecha</th><th>Agricultor</th><th>Plaga</th><th>Resultado</th><th>Recomendación</th></tr></thead><tbody>
                        {diagnosticos.map(d => (
                            <tr key={d.id}>
                                <td>{new Date(d.fecha).toLocaleDateString()}</td>
                                <td>{d.agricultor}</td>
                                <td>{d.plaga?.nombre || 'No registrado'}</td>
                                <td>{d.resultado || 'No registrado'}</td>
                                <td>{d.recomendacion || 'No registrado'}</td>
                            </tr>
                        ))}
                    </tbody></table>
                </div>
            )}
        </div>
    );
}
