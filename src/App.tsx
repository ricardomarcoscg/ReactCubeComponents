import { useForm } from 'react-hook-form';
import './App.css';
import { CubeInput } from './components/Input/cbInput';
import { createCPFInput, createEmailInput, createInput, createPhoneInput } from './components/Input/cbInputFactory';
import { Box } from '@mui/material';

function App() {
  const form = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur'
  });

  const onSubmit = (data: any) => {
    console.log('Form Values:', data);
  };

  const inputNome = createInput('nome', 'NOME', 'text', 'DIGITE SEU NOME')
    .required('Nome é obrigatório');

  const inputEndereco = createInput('endereco', 'ENDEREÇO', 'text', 'DIGITE SEU ENDEREÇO')
    .required('Endereço é obrigatório');

  const inputEmail = createEmailInput('email', 'EMAIL', 'email', 'DIGITE SEU EMAIL');

  const inputCPF = createCPFInput('cpf', 'CPF', 'text', 'DIGITE SEU CPF');

  const inputTelefone = createPhoneInput('telefone', 'TELEFONE', 'text', 'DIGITE SEU TELEFONE');

  return (
    <div className="App">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="formulario">
          <div className='title-page'>
            <div className='title'>Exemplo de formulário de cadastro</div>
            <div className='description'>Este é um exemplo de formulário de cadastro com campos de entrada de dados.</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-12 gap-4">
            <div className='col-span-3'>
              <CubeInput
                element={inputNome}
                form={form}
              />
            </div>
            <div className='col-span-3'>
              <CubeInput
                element={inputCPF}
                form={form}
              />
            </div>
            <div className='col-span-3'>
              <CubeInput
                element={inputTelefone}
                form={form}
              />
            </div>
            <div className='col-span-9'>
              <CubeInput
                element={inputEndereco}
                form={form}
              />
            </div>
            <div className='col-span-3'>
              <CubeInput
                element={inputEmail}
                form={form}
              />
            </div>
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;