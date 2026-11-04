import React from 'react';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ListaActividades from './components/ListaActividades';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <HeaderClase />
      <ObjetivosCard />
      
      {/* actividades desde NocoDB Cloud */}
      <ListaActividades />
    </div>
  );
}