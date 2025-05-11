# Cube Components Demo

Este é um projeto de demonstração da utilização dos componentes da biblioteca Cube, especificamente o componente CubeInput em React. O projeto mostra como implementar formulários responsivos com validação e máscaras de entrada.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Superset JavaScript com tipagem estática
- **React Hook Form**: Biblioteca para gerenciamento de formulários
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **Material Symbols**: Biblioteca de ícones do Google

## Componentes Demonstrados

### CubeInput

O componente CubeInput é um input personalizado que oferece:

- Validação de campos
- Máscaras de entrada (CPF, CNPJ, Telefone, CEP, etc.)
- Suporte a ícones
- Mensagens de erro personalizadas
- Layout responsivo
- Integração com React Hook Form

#### Exemplo de Uso

```typescript
const inputCPF = createCPFInput('cpf', 'CPF', 'text', 'Digite seu CPF')
  .required('CPF é obrigatório');

<CubeInput
  element={inputCPF}
  form={form}
/>
```

#### Tipos de Input Disponíveis

- Input Texto Simples
- Input CPF
- Input CNPJ
- Input CPF/CNPJ
- Input Telefone
- Input CEP
- Input Email
- Input com Máscara Personalizada

## Layout Responsivo

O projeto utiliza Tailwind CSS para criar um layout responsivo que se adapta a diferentes tamanhos de tela:

- Mobile: Campos empilhados verticalmente
- Desktop: Campos distribuídos em grid de 12 colunas

## Autor

**Ricardo Marcos Gonçalves Filho**  
Ex/UI Designer e Desenvolvedor Front End Senior  
UX Cube

### Contato

- **Email**: ricardomarcoscg@gmail.com
- **Telefone**: (67) 98444-8453
- **LinkedIn**: [Ricardo Marcos Gonçalves Filho](https://www.linkedin.com/in/ricardo-marcos-gon%C3%A7alves-filho-9a113990/)

## Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
