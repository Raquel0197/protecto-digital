import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ListaActividades() {
  // Paso 2.1: Estados para los registros y el semáforo de carga
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);

  // useEffect, fetch, headers y .catch()
  useEffect(() => {
    const fetchActividades = async () => {
      try {
        const response = await fetch(
          'https://app.nocodb.com/api/v3/data/p2qw9rjs5fbcbwe/mh2fuzm0rrpxkc9/records',
          {
            headers: {
              'xc-token': 'nc_pat_tu_token_aqui' 
            }
          }
        );
        
        if (!response.ok) {
          throw new Error('Error en la red o token no válido');
        }
        
        const data = await response.json();
        setActividades(data.list || data.rows || []);
        setCargando(false);
      } catch (err) {
        console.error("Aviso de depuración (Modo Seguro Activo):", err.message);
        // Respaldo de datos locales 
        setActividades([
          { 
            id: 1, 
            Title: "Ciclo del agua y evaporación", 
            duracion: 15, 
            categoria: "teorica", 
            descripcion: "El sol calienta el agua superficial y la evapora." 
          },
          { 
            id: 2, 
            Title: "Condensación y precipitación", 
            duracion: 15, 
            categoria: "practica", 
            descripcion: "El vapor se enfría formando nubes y cae en forma de lluvia." 
          },
          { 
            id: 3, 
            Title: "Impacto ambiental", 
            duracion: 15, 
            categoria: "evaluacion", 
            descripcion: "Reflexión grupal sobre la importancia del cuidado del agua." 
          }
        ]);
        setCargando(false);
      }
    };

    fetchActividades();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h3 style={{ color: '#002B5B', textAlign: 'center', marginBottom: '1rem' }}>
        Secuencia Didáctica (Integración NocoDB & React)
      </h3>

      {/* Semáforo de carga */}
      {cargando && (
        <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
          🔄 Conectando con NocoDB Cloud...
        </p>
      )}

      {/* Renderizado funcional mediante .map() */}
      {!cargando && actividades.map((datos, index) => (
        <motion.div 
          key={datos.id || datos.Id || index}
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
              {datos.Title || datos.title}
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