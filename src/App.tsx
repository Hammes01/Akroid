import React from "react";
import { Link } from "react-scroll";
import { Box, Typography, Button } from "@mui/material";
import QuemSomos from "./sections/Quemsomos";
import Servicos from "./sections/Servicos";
import Clientes from "./sections/Clientes";
import Contato from "./sections/Contato";

const App: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#4CAF50",
          padding: "1rem",
          zIndex: 1000,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          <Link to="quem-somos" smooth={true} duration={500}>
            <Button color="inherit">Quem Somos</Button>
          </Link>
          <Link to="servicos" smooth={true} duration={500}>
            <Button color="inherit">Serviços</Button>
          </Link>
          <Link to="clientes" smooth={true} duration={500}>
            <Button color="inherit">Clientes</Button>
          </Link>
          <Link to="contato" smooth={true} duration={500}>
            <Button color="inherit">Contato</Button>
          </Link>
        </Box>
      </Box>

      {/* Conteúdo */}
      <Box sx={{ marginTop: "80px" }}>
        <section id="quem-somos">
          <QuemSomos />
        </section>
        <section id="servicos">
          <Servicos />
        </section>
        <section id="clientes">
          <Clientes />
        </section>
        <section id="contato">
          <Contato />
        </section>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#4CAF50",
          color: "white",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <Typography>Acroyd - Todos os direitos reservados</Typography>
      </Box>
    </>
  );
};

export default App;
