import React from 'react';
import Confetti from 'react-confetti';
import './AchievementModal.css'; // Asegúrate de tener estilos para el modal

export default function AchievementModal({ achievement, onClose }) {
    if (!achievement) return null;

    return (
        <div className="modal-overlay">
            <Confetti />
            <div className="modal-content">
                <h2>🎉 ¡Logro desbloqueado!</h2>
                <p>{achievement.name}</p>
                <small>{achievement.description}</small>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}
