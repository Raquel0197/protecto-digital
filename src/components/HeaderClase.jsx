import { motion } from 'framer-motion';

export default function HeaderClase() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#002B5B', color: '#F9F5EB', padding: '1rem', textAlign: 'center' }}
    >
      <h1>Plan de Clase Digital</h1>
      <p>Docente: Raquel Aju | Nivel: básico</p>
    </motion.header>
  );
}