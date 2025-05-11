import React from 'react';
import { useForm } from 'react-hook-form';
import { CubeInput } from './cbInput';
import { createCPFInput, createPhoneInput, createCEPInput } from './cbInputFactory';

export const CubeInputExample: React.FC = () => {
  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="formulario">
          <div className='title-page'>
            <div className='title'>Exemplo de formulário de cadastro</div>
            <div className='description'>Este é um exemplo de formulário de cadastro com campos de entrada de dados.</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className='w-full md:col-span-3'>
              <CubeInput
                element={createCPFInput(
                  'cpf',
                  'CPF',
                  'text',
                  'Digite seu CPF'
                ).required('CPF é obrigatório')}
                form={form}
              />
            </div>
            <div className='w-full md:col-span-3'>
              <CubeInput
                element={createPhoneInput(
                  'phone',
                  'Telefone',
                  'text',
                  'Digite seu telefone'
                ).required('Telefone é obrigatório')}
                form={form}
              />
            </div>
            <div className='w-full md:col-span-3'>
              <CubeInput
                element={createCEPInput(
                  'cep',
                  'CEP',
                  'text',
                  'Digite seu CEP'
                ).required('CEP é obrigatório')}
                form={form}
              />
            </div>
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}; 