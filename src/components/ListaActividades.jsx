import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ListaActividades() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerActividades = async () => {
      try {
        const urlAPI = "https://app.nocodb.com/api/v1/db/data/v1/p2qw9rjs5fbcbwe/Actividades";
        
        const respuesta = await fetch(urlAPI, {
          method: 'GET',
          headers: {
            'xc-token': 'nc_pat_0E5pgX2jkL1lXhG4SD4xCLe1BBOT1pC4C2413ja'
          }
        });

        const resultado = await respuesta.json();
        console.log("Datos recibidos de NocoDB:", resultado); 
        setActividades(resultado.list || resultado.data || (Array.isArray(resultado) ? resultado : []));
        setCargando(false);
      } catch (error) {
        console.error("Error al conectar con NocoDB:", error);
        setCargando(false);
      }
    };

    obtenerActividades();
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', padding: '1rem', color: '#002B5B' }}>Cargando actividades desde la nube...</p>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h3 style={{ color: '#002B5B', textAlign: 'center', marginBottom: '1rem' }}>
        Secuencia Didáctica (Conectado a NocoDB Cloud)
      </h3>
      
      {actividades.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No se encontraron registros en la base de datos.</p>
      ) : (
        actividades.map((item, index) => {
          // datos validos
          const datos = item.fields || item; 

          return (
            <motion.div 
              key={item.Id || index}
              whileHover={{ scale: 1.01 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ border: '2px solid #F07B3F', padding: '1rem', margin: '1rem 0', borderRadius: '8px', background: '#fff' }}
            >
              <div style={{ textAlign: 'center', marginBottom: '6px' }}>
                <span style={{ background: '#F07B3F', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  {datos.categoria || datos.Category || "Actividad"}
                </span>
                <h4 style={{ color: '#002B5B', fontSize: '0.95rem', marginTop: '6px' }}>
                  {datos.Title || datos.title || "Sin título"}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>
                  ⏱️ Duración: {datos.duracion || datos.Duration || "15"} minutos
                </p>
              </div>
              
              <p style={{ fontSize: '0.85rem', color: '#444', textAlign: 'center', margin: '10px 0' }}>
                {datos.descripcion || datos.Description || "Sin descripción"}
              </p>
            </motion.div>
          );
        })
      )}
    </div>
  );
}