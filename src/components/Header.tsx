// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <AppBar position="static" sx={{ backgroundColor: '#4CAF50' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>Akroid</Typography>
      <Box>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">Quem Somos</Button>
        <Button component={Link} to="/services" color="inherit">Serviços</Button>
        <Button component={Link} to="/clients" color="inherit">Clientes</Button>
        <Button component={Link} to="/contact" color="inherit">Contato</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
