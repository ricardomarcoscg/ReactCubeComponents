import './App.css';
import { useForm } from 'react-hook-form';
import { CubeInput } from './components/Input/cbInput';
import { createCPFInput, createEmailInput, createInput, createPhoneInput } from './components/Input/cbInputFactory';

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

  const inputCPF = createCPFInput('cpf', 'CPF', 'text', 'DIGITE SEU CPF')
    .required('CPF é obrigatório');

  const inputTelefone = createPhoneInput('telefone', 'TELEFONE', 'text', 'DIGITE SEU TELEFONE')
    .required('Telefone é obrigatório');

  const inputEmail = createEmailInput('email', 'EMAIL', 'email', 'DIGITE SEU EMAIL')
    .required('Email é obrigatório');

  const inputEndereco = createInput('endereco', 'ENDEREÇO', 'text', 'DIGITE SEU ENDEREÇO');

  return (
    <div className="App">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="rc-container">
          <div className='title-page'>
            <div className='title'>Exemplo de formulário de cadastro</div>
            <div className='description'>Este formulário é um exemplo de como usar o a biblioteca CUBE e o componente CubeInput.</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className='w-full md:col-span-3'>
              <CubeInput
                element={inputNome}
                form={form}
              />
            </div>
            <div className='w-full md:col-span-3'>
              <CubeInput
                element={inputCPF}
                form={form}
              />
            </div>
            <div className='w-full md:col-span-3'>
              <CubeInput
                element={inputTelefone}
                form={form}
              />
            </div>
            <div className='w-full md:col-span-3'>
              <CubeInput
                element={inputEmail}
                form={form}
              />
            </div>
            <div className='w-full md:col-span-12'>
              <CubeInput
                element={inputEndereco}
                form={form}
              />
            </div>
          </div>
          <div className='rc-form-actions'>
            <button className='rc-btn-primary' type="submit" disabled={!form.formState.isValid}>Enviar</button>
          </div>
          <div className='form-values'>
            <div className='form-values-title'>Valores do formulário</div>
            <div className='form-values-content'>
              <pre>{JSON.stringify(form.getValues(), null, 2)}</pre>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;