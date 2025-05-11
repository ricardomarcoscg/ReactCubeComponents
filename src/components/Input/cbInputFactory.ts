import { getMaskPattern } from '../base/utils';
import { InputElement } from './cbInput';

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

export const createCPFInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  const mask = '000.000.000-00';
  return createInput(name, label, type, placeHolder)
    .setMask(mask)
    .setMaxLength(14)
    .addValidator('pattern', {
      pattern: {
        value: getMaskPattern(mask),
        message: 'CPF inválido'
      }
    });
};

export const createInscricaoEstadualInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  const mask = '00.000.000-0';
  return createInput(name, label, type, placeHolder)
    .setMask(mask)
    .addValidator('pattern', {
      pattern: {
        value: getMaskPattern(mask),
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
  const mask = '00.000.000/0000-00';
  return createInput(name, label, type, placeHolder)
    .setMask(mask)
    .addValidator('pattern', {
      pattern: {
        value: getMaskPattern(mask),
        message: 'CNPJ inválido'
      }
    });
};

export const createCPFCNPJInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  const input = createInput(name, label, type, placeHolder);
  input.setMask((value: string) => value.length > 11 ? '00.000.000/0000-00' : '000.000.000-00');
  input.addValidator('pattern', {
    pattern: {
      value: /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/,
      message: 'CPF/CNPJ inválido'
    }
  });
  return input;
};

export const createCEPInput = (
  name: string,
  label: string,
  type: string = 'text',
  placeHolder?: string
): InputElement => {
  const mask = '00.000-000';
  return createInput(name, label, type, placeHolder)
    .setMask(mask)
    .addValidator('pattern', {
      pattern: {
        value: getMaskPattern(mask),
        message: 'CEP inválido'
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
  const mask = '(00) 00000-0000';
  return createInput(name, label, type, placeHolder)
    .setMask(mask)
    .setMaxLength(15)
    .addValidator('pattern', {
      pattern: {
        value: getMaskPattern(mask),
        message: 'Telefone inválido'
      }
    });
}; 