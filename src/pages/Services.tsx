// src/pages/Services.tsx
import React from "react";
import { Grid } from "@mui/material";
import ServiceCard from "../components/ServiceCard";

const services = [
  { title: "Instalação de Placas Solares", description: "Soluções completas para gerar energia limpa e sustentável." },
  { title: "Consultoria em Licitações", description: "Ajuda especializada para vencer licitações públicas e privadas." },
  { title: "Venda de Equipamentos", description: "Fornecimento de equipamentos de alta qualidade para projetos de energia." },
];

const Services: React.FC = () => (
  <Grid container spacing={4} sx={{ padding: 2 }}>
    {services.map((service, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <ServiceCard title={service.title} description={service.description} />
      </Grid>
    ))}
  </Grid>
);

export default Services;
