import { motion } from 'framer-motion';

export default function ActividadItem({ titulo, descripcion }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      style={{ background: '#F9F5EB', border: '1px solid #EA5455', padding: '1rem', margin: '0.5rem 0', borderRadius: '6px' }}
    >
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
    </motion.div>
  );
}