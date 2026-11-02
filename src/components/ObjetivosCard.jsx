import { motion } from 'framer-motion';

export default function ObjetivosCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.4, delay: 0.2 }}
      style={{ border: '2px solid #F07B3F', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}
    >
      <h3>Competencia</h3>
      <p>Comprender los procesos físicos del ciclo del agua y su importancia para la conservación del medio ambiente.</p>
    </motion.div>
  );
}