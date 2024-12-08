// src/pages/Home.tsx

import { motion } from 'framer-motion';

const Home = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Bem-vindo à Akroid</h1>
      <p>Soluções inovadoras em energia solar e licitações.</p>
    </motion.div>
  );

export default Home;
