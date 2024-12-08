// src/pages/Contact.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Box, TextField, Button, Typography } from '@mui/material';

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    emailjs
      .send(
        "service_4u1u4si", // Seu SERVICE_ID
        "template_2h4bhyk", // Seu TEMPLATE_ID
        {
          from_name: data.name, // Mapeia o placeholder {{from_name}}
          reply_to: data.email, // Mapeia o placeholder {{reply_to}}
          message: data.message, // Mapeia o placeholder {{message}}
        },
        "lDiKhAzNKZPqvLaTd" // Seu USER_ID (chave pública)
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        reset();
      })
      .catch((err) => {
        console.error("Erro ao enviar mensagem:", err);
        alert("Erro ao enviar mensagem. Tente novamente.");
      });
  };

  return (
    <Box sx={{ padding: 2, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>Entre em Contato</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name')}
          label="Seu Nome"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          {...register('email')}
          label="Seu E-mail"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          {...register('message')}
          label="Mensagem"
          multiline
          rows={4}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
