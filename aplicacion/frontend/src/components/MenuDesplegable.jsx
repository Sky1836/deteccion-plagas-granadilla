import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './menu.css';

export default function MenuDesplegable({ userName = 'Usuario', onNavigate = () => { } }) {
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => setVisible(!visible);

    const handleNavigate = (seccion) => {
        onNavigate(seccion);
        setVisible(false);
    };

    return (
        <>
            <div className="menu-header" id="menu-header">
                <button className="menu-toggle-btn" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} /> <span className="menu-label">Menú</span>
                </button>
            </div>

            {visible && (
                <div className="menu-overlay" id="menu-overlay">
                    <div className="menu-sidebar" id="menu-sidebar">
                        <div className="menu-top">
                            <h2>Bienvenido, <b>{userName}</b></h2>
                            <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleMenu} />
                        </div>
                        <ul className="menu-list" id="menu-list">
                            <li onClick={() => handleNavigate('inicio')} className="menu-item" id="menu-inicio">Inicio</li>
                            <li onClick={() => handleNavigate('historial')} className="menu-item" id="menu-historial">
                                Historial de Consultas <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                            <li onClick={() => handleNavigate('trips')} className="menu-item" id="menu-trips">
                                Trips <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                            <li onClick={() => handleNavigate('arania')} className="menu-item" id="menu-hlb">
                                Araña Roja <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                            <li onClick={() => window.location.href="/login"} className="menu-item logout" id="menu-hlb">
                                Cerrar sesión <FontAwesomeIcon icon={faRightFromBracket} />
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}
