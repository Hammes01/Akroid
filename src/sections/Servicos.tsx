// src/sections/Servicos.tsx
import React from "react";
import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";

const services = [
  { title: "Instalação de Placas Solares", description: "Soluções completas para energia limpa." },
  { title: "Consultoria em Licitações", description: "Especialistas em vencer licitações." },
  { title: "Venda de Equipamentos", description: "Equipamentos de alta qualidade para projetos." },
];

const Servicos: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <Box sx={{ padding: "4rem", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>Serviços</Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
              <Typography variant="h5">{service.title}</Typography>
              <Typography>{service.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </motion.div>
);

export default Servicos;
