import React from 'react';
import { motion } from 'framer-motion';

export default function ListaActividades() {
  // Datos de la secuencia didáctica del ciclo del agua
  const actividades = [
    { 
      id: 1, 
      title: "Ciclo del agua y evaporación", 
      duracion: 15, 
      categoria: "teorica", 
      descripcion: "El sol calienta el agua superficial y la evapora." 
    },
    { 
      id: 2, 
      title: "Condensación y precipitación", 
      duracion: 15, 
      categoria: "practica", 
      descripcion: "El vapor se enfría formando nubes y cae en forma de lluvia." 
    },
    { 
      id: 3, 
      title: "Impacto ambiental", 
      duracion: 15, 
      categoria: "evaluacion", 
      descripcion: "Reflexión grupal sobre la importancia del cuidado del agua." 
    }
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h3 style={{ color: '#002B5B', textAlign: 'center', marginBottom: '1rem' }}>
        Secuencia Didáctica
      </h3>
      
      {actividades.map((datos, index) => (
        <motion.div 
          key={datos.id || index}
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ border: '2px solid #F07B3F', padding: '1rem', margin: '1rem 0', borderRadius: '8px', background: '#fff' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '6px' }}>
            <span style={{ background: '#F07B3F', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
              {datos.categoria}
            </span>
            <h4 style={{ color: '#002B5B', fontSize: '0.95rem', marginTop: '6px' }}>
              {datos.title}
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>
              ⏱️ Duración: {datos.duracion} minutos
            </p>
          </div>
          
          <p style={{ fontSize: '0.85rem', color: '#444', textAlign: 'center', margin: '10px 0' }}>
            {datos.descripcion}
          </p>
        </motion.div>
      ))}
    </div>
  );
}