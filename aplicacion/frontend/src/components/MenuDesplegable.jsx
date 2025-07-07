import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './menu.css';

export default function MenuDesplegable({ userName = 'Usuario', onNavigate = () => { } }) {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => setVisible(!visible);

    const handleNavigate = (seccion) => {
        onNavigate(seccion);
        setVisible(false);
    };

    return (
        <>
            <div className="menu-header" id="menu-header">
                <button className="menu-toggle-btn" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} /> <span className="menu-label">{t('menu.title')}</span>
                </button>
            </div>

            {visible && (
                <div className="menu-overlay" id="menu-overlay">
                    <div className="menu-sidebar" id="menu-sidebar">
                        <div className="menu-top">
                            <h2>{t('menu.welcome', { name: userName })}</h2>
                            <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleMenu} />
                        </div>
                        <ul className="menu-list" id="menu-list">
                            <li onClick={() => handleNavigate('inicio')} className="menu-item" id="menu-inicio">
                                {t('menu.home')}
                            </li>
                            <li onClick={() => handleNavigate('historial')} className="menu-item" id="menu-historial">
                                {t('menu.history')} <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                            <li onClick={() => handleNavigate('trips')} className="menu-item" id="menu-trips">
                                {t('menu.trips')} <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                            <li onClick={() => handleNavigate('arania')} className="menu-item" id="menu-hlb">
                                {t('menu.redSpider')} <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                            <li onClick={() => handleNavigate('logros')} className="menu-item" id="menu-hlb">
                                {t('menu.logro')} <FontAwesomeIcon icon={faChevronRight} />
                            </li>
                            <li onClick={() => window.location.href = "/login"} className="menu-item logout" id="menu-hlb">
                                {t('menu.logout')} <FontAwesomeIcon icon={faRightFromBracket} />
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}
