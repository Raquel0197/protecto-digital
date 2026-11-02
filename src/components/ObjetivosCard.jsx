import { motion } from 'framer-motion';

export default function ObjetivosCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.4, delay: 0.2 }}
      style={{ border: '2px solid #F07B3F', padding: '1rem', margin: '1rem 0', borderRadius: '8px', background: '#fff' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '6px' }}>
        <span style={{ border: '1px solid #F07B3F', color: '#F07B3F', padding: '2px 10px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          🎯 Competencia
        </span>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#333', marginBottom: '12px' }}>
        Comprender los procesos físicos del ciclo del agua y su importancia para la conservación del medio ambiente.
      </p>
      
      <hr style={{ border: 'none', borderTop: '2px dashed #F07B3F', margin: '12px 0' }} />
      
      <div style={{ textAlign: 'center', marginBottom: '6px' }}>
        <span style={{ border: '1px solid #F07B3F', color: '#F07B3F', padding: '2px 10px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          📝 Indicador de Logro
        </span>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#333' }}>
        Identifica y explica las etapas del ciclo del agua (evaporación, condensación y precipitación) mediante una interfaz interactiva.
      </p>
    </motion.div>
  );
}