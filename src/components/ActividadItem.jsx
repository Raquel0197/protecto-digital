import { motion } from 'framer-motion';

export default function ActividadItem({ etapa, titulo, duracion, descripcion }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      style={{ border: '2px solid #F07B3F', padding: '1rem', margin: '1rem 0', borderRadius: '8px', background: '#fff' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '6px' }}>
        <span style={{ background: '#F07B3F', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
          {etapa || "Inicio / Teórica"}
        </span>
        <h4 style={{ color: '#002B5B', fontSize: '0.95rem', marginTop: '6px' }}>
          {titulo || "1. Introducción al Ciclo del Agua y Evaporación"}
        </h4>
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>
          ⏱️ Duración: {duracion || "15 minutos"}
        </p>
      </div>
      
      <p style={{ fontSize: '0.85rem', color: '#444', textAlign: 'center', margin: '10px 0' }}>
        {descripcion || "El sol calienta el agua superficial transformándola en vapor que asciende a la atmósfera."}
      </p>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <button style={{ background: '#EA5455', color: '#fff', border: 'none', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 'bold' }}>
          Marcar como realizada
        </button>
      </div>
    </motion.div>
  );
}