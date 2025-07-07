import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <select
            className="language-selector"
            onChange={handleChange}
            value={i18n.language}
        >
            <option value="es">Español</option>
            <option value="en">English</option>
        </select>
    );
}
