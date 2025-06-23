import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faRightFromBracket, faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const urlBase = 'https://deteccion-plagas-granadilla-production.up.railway.app';

export default function AdminPanel() {
    const [vista, setVista] = useState('');
    const [expanded, setExpanded] = useState({ plagas: false, insecticidas: false, diagnosticos: false });
    const [plagas, setPlagas] = useState([]);
    const [insecticidas, setInsecticidas] = useState([]);
    const [diagnosticos, setDiagnosticos] = useState([]);
    const [plagasSelect, setPlagasSelect] = useState([]);
    const [modal, setModal] = useState('');
    console.log(vista);

    const toggleSection = (section) => {
        const newExpanded = { ...expanded, [section]: !expanded[section] };
        setExpanded(newExpanded);
        setVista(section);
        if (section === 'plagas') cargarPlagas();
        if (section === 'insecticidas') {
            cargarPlagasSelect();
            cargarInsecticidas();
        }
        if (section === 'diagnosticos') cargarDiagnosticos();
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
        setModal('');
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
        setModal('');
    };

    return (
        <div className="admin-container">
            <h1 className="admin-title">Panel de Administración</h1>

            <div className={`section-header ${expanded.plagas ? 'expanded' : ''}`} onClick={() => toggleSection('plagas')}>
                <FontAwesomeIcon icon={expanded.plagas ? faChevronDown : faChevronRight} /> Plagas
            </div>
            <div className={`section-body-wrapper ${expanded.plagas ? 'expand' : 'collapse'}`}>
                {expanded.plagas && (
                    <div className="section-body">
                        <button onClick={() => setModal('plaga')} className="add-button">
                            <FontAwesomeIcon icon={faPlus} />
                            Añadir nueva plaga
                        </button>
                        <div className="table-container">
                            <table className="admin-table">
                                <thead>
                                    <tr><th>Nombre</th><th>Tipo</th><th>Descripción</th></tr>
                                </thead>
                                <tbody>
                                    {plagas.map(p => (
                                        <tr key={p.id}><td>{p.nombre}</td><td>{p.tipo}</td><td>{p.descripcion}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            <div className={`section-header ${expanded.insecticidas ? 'expanded' : ''}`} onClick={() => toggleSection('insecticidas')}>
                <FontAwesomeIcon icon={expanded.insecticidas ? faChevronDown : faChevronRight} /> Insecticidas
            </div>
            <div className={`section-body-wrapper ${expanded.insecticidas ? 'expand' : 'collapse'}`}>
                {expanded.insecticidas && (
                    <div className="section-body">
                        <button onClick={() => setModal('insecticida')} className="add-button">
                            <FontAwesomeIcon icon={faPlus} />
                            Añadir insecticida
                        </button>
                        <div className='table-container'>
                            <table className="admin-table">
                                <thead>
                                    <tr><th>Nombre</th><th>Compuesto</th><th>Aplicación</th><th>Plaga</th></tr>
                                </thead>
                                <tbody>
                                    {insecticidas.map(i => (
                                        <tr key={i.id}><td>{i.nombre}</td><td>{i.compuesto}</td><td>{i.aplicacion}</td><td>{i.plaga?.nombre || '-'}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            <div className={`section-header ${expanded.diagnosticos ? 'expanded' : ''}`} onClick={() => toggleSection('diagnosticos')}>
                <FontAwesomeIcon icon={expanded.diagnosticos ? faChevronDown : faChevronRight} /> Diagnósticos
            </div>
            <div className={`section-body-wrapper ${expanded.diagnosticos ? 'expand' : 'collapse'}`}>
                {expanded.diagnosticos && (
                    <div className="section-body">
                        <div className='table-container'>
                            <table className="admin-table">
                                <thead>
                                    <tr><th>Fecha</th><th>Agricultor</th><th>Plaga</th><th>Resultado</th><th>Recomendación</th></tr>
                                </thead>
                                <tbody>
                                    {diagnosticos.map(d => (
                                        <tr key={d.id}>
                                            <td>{new Date(d.fecha).toLocaleDateString()}</td>
                                            <td>{d.agricultor}</td>
                                            <td>{d.plaga?.nombre || 'No registrado'}</td>
                                            <td>{d.resultado || 'No registrado'}</td>
                                            <td>{d.recomendacion || 'No registrado'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {modal === 'plaga' && (
                <div className="modal">
                    <form onSubmit={submitPlaga} className="modal-form">
                        <h2>Agregar Plaga</h2>
                        <label>Nombre: <input type="text" name="nombre" required /></label>
                        <label>Descripción: <input type="text" name="descripcion" required /></label>
                        <label>Tipo: <input type="text" name="tipo" required /></label>
                        <div className="modal-actions">
                            <button type="submit">Guardar</button>
                            <button type="button" onClick={() => setModal('')}>Cancelar</button>
                        </div>
                    </form>
                </div>
            )}

            {modal === 'insecticida' && (
                <div className="modal">
                    <form onSubmit={submitInsecticida} className="modal-form">
                        <h2>Agregar Insecticida</h2>
                        <label>Nombre: <input type="text" name="nombre" required /></label>
                        <label>Compuesto: <input type="text" name="compuesto" required /></label>
                        <label>Aplicación: <input type="text" name="aplicacion" required /></label>
                        <label>Plaga:
                            <select name="plagaId">
                                {plagasSelect.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
                            </select>
                        </label>
                        <div className="modal-actions">
                            <button type="submit">Guardar</button>
                            <button type="button" onClick={() => setModal('')}>Cancelar</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="section-header logout" onClick={() => window.location.href = "/login"}>
                <FontAwesomeIcon icon={faRightFromBracket} /> Cerrar sesión
            </div>
        </div>
    );
}