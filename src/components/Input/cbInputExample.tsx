import React from 'react';
import { useForm } from 'react-hook-form';
import { CubeInput } from './cbInput';
import { createCPFInput, createPhoneInput, createCEPInput } from './cbInputFactory';
import { Container, Button, Box } from '@mui/material';

export const CubeInputExample: React.FC = () => {
  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container maxWidth="lg">
      <h2>Exemplos de Input</h2>
      
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <CubeInput
              element={createCPFInput(
                'cpf',
                'CPF',
                'text',
                'Digite seu CPF'
              ).required('CPF é obrigatório')}
              form={form}
            />
          </Box>

          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <CubeInput
              element={createPhoneInput(
                'phone',
                'Telefone',
                'text',
                'Digite seu telefone'
              ).required('Telefone é obrigatório')}
              form={form}
            />
          </Box>

          <Box sx={{ flex: '1 1 300px', minWidth: 0 }}>
            <CubeInput
              element={createCEPInput(
                'cep',
                'CEP',
                'text',
                'Digite seu CEP'
              ).required('CEP é obrigatório')}
              form={form}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </Box>
      </form>
    </Container>
  );
}; 