import React, { useState } from 'react';

export default function ActividadItem({ numero, tipo, titulo, duracion, descripcion }) {
  const [completado, setCompletado] = useState(false);

  return (
    <div className={`actividad-card ${completado ? 'completada' : ''}`}>
      <div className="actividad-badge-container">
        <span className="actividad-badge">{tipo}</span>
      </div>
      
      <h3>{numero}. {titulo}</h3>
      
      <p className="actividad-duracion">⏱️ Duración: {duracion} minutos</p>

      {descripcion && (
        <p className="actividad-descripcion">{descripcion}</p>
      )}

      <div className="actividad-btn-container">
        <button 
          onClick={() => setCompletado(!completado)}
          className={`btn-accion ${completado ? 'btn-realizado' : 'btn-pendiente'}`}
        >
          {completado ? '✓ Actividad Realizada' : 'Marcar como realizada'}
        </button>
      </div>
    </div>
  );
}