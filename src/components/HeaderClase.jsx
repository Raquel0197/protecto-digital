import { motion } from 'framer-motion';

export default function HeaderClase() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#002B5B', color: '#F9F5EB', padding: '1.2rem', textAlign: 'center', borderRadius: '4px', marginBottom: '1rem' }}
    >
      <p style={{ color: '#EA5455', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '4px' }}>
        El Ciclo del Agua y su Impacto en el Medio Ambiente
      </p>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Plan de Clase Digital</h1>
      <p style={{ fontSize: '0.9rem' }}>Docente: Raquel Aju | Nivel: nivel basico</p>
    </motion.header>
  );
}