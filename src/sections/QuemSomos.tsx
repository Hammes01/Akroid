// src/sections/QuemSomos.tsx
import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const QuemSomos: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <Box sx={{ padding: "4rem", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>Quem Somos</Typography>
      <Typography>
        A Acroyd é uma empresa inovadora focada em energia solar e consultoria
        para licitações. Trabalhamos com soluções sustentáveis e de alta
        qualidade para nossos clientes.
      </Typography>
    </Box>
  </motion.div>
);

export default QuemSomos;
