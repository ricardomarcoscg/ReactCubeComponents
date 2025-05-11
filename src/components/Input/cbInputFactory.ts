import { InputElement } from './cbInput';
import { validateCPF } from '../base/utils';

export const createInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  const input = new InputElement({
    name,
    label,
    type,
    validators: [],
    placeHolder: placeHolder || ''
  });

  return input;
};

export const createDisabledInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  const input = createInput(name, label, type, placeHolder);
  input.disabled = true;
  return input;
};

export const createMaskedInput = (
  name: string,
  label: string,
  type: string = 'text',
  mask: string,
  placeHolder?: string
): InputElement => {
  return createInput(name, label, type, placeHolder).setMask(mask);
};

export const createCPFInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  return createInput(name, label, type, placeHolder)
    .setMask('000.000.000-00')
    .addValidator('pattern', {
      pattern: {
        value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        message: 'Informe um CPF válido com a pontuação correta'
      }
    })
    .setMaxLength(14);
};

export const createInscricaoEstadualInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  return createInput(name, label, type, placeHolder)
    .setMask('00.000.000-0')
    .addValidator('pattern', {
      pattern: {
        value: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
        message: 'Inscrição Estadual inválida'
      }
    });
};

export const createCNPJInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  return createInput(name, label, type, placeHolder)
    .setMask('00.000.000/0000-00')
    .addValidator('pattern', {
      pattern: {
        value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
        message: 'CNPJ inválido'
      }
    });
};

export const createCEPInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  return createInput(name, label, type, placeHolder)
    .setMask('00.000-000')
    .addValidator('pattern', {
      pattern: {
        value: /^\d{5}-\d{3}$/,
        message: 'CEP inválido',  
      }
    });
};

export const createEmailInput = (
  name: string,
  label: string,
  type: string = 'email',
  placeHolder?: string
): InputElement => {
  return createInput(name, label, type, placeHolder)
    .addValidator('pattern', {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Email inválido'
      }
    });
};

export const createPhoneInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  return createInput(name, label, type, placeHolder)
    .setMask('(00) 00000-0000')
    .setMaxLength(15)
    .addValidator('pattern', {
      pattern: {
        value: /^\(\d{2}\) \d{5}-\d{4}$/,
        message: 'Informe um telefone válido. Exemplo: (00) 00000-0000'
      }
    });
}; 