// src/sections/Clientes.tsx
import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const Clientes: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <Box sx={{ padding: "4rem", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>Clientes</Typography>
      <Typography>
        Trabalhamos com empresas como Empreiteira XYZ, SolarTech LTDA e outras
        grandes organizações.
      </Typography>
    </Box>
  </motion.div>
);

export default Clientes;
