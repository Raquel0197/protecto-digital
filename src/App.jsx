import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <HeaderClase />
      
      <ObjetivosCard />

      <h3 className="titulo-secuencia">
        Secuencia Didáctica de la Clase
      </h3>

      <ActividadItem 
        numero="1"
        tipo="Inicio / Teórica"
        titulo="Introducción al Ciclo del Agua y Evaporación"
        duracion="15"
        descripcion="El sol calienta el agua superficial transformándola en vapor que asciende a la atmósfera."
      />

      <ActividadItem 
        numero="2"
        tipo="Desarrollo / Práctica"
        titulo="Módulo de Condensación y Precipitación"
        duracion="15"
        descripcion="El vapor se enfría formando nubes y regresa a la tierra en forma de lluvia."
      />

      <ActividadItem 
        numero="3"
        tipo="Cierre / Evaluación"
        titulo="Preguntas Interactivas e Impacto Ambiental"
        duracion="15"
        descripcion="Reflexión grupal sobre la importancia del agua y llenado de la boleta de control."
      />
    </div>
  );
}