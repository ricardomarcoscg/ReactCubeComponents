export const validateCPF = (cpf: string): boolean => {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');

  // Verifica se tem 11 dígitos
  if (cpf.length !== 11) return false;

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Validação do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let rest = 11 - (sum % 11);
  let digit1 = rest > 9 ? 0 : rest;
  if (digit1 !== parseInt(cpf.charAt(9))) return false;

  // Validação do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  rest = 11 - (sum % 11);
  let digit2 = rest > 9 ? 0 : rest;
  if (digit2 !== parseInt(cpf.charAt(10))) return false;

  return true;
};

export const applyMask = (value: string, mask: string): string => {
  let result = '';
  let valueIndex = 0;

  // Remove caracteres não numéricos do valor
  const numericValue = value.replace(/\D/g, '');

  // Aplica a máscara
  for (let i = 0; i < mask.length && valueIndex < numericValue.length; i++) {
    if (mask[i] === '0') {
      result += numericValue[valueIndex];
      valueIndex++;
    } else {
      result += mask[i];
    }
  }

  return result;
};

export const getMaskPattern = (mask: string): RegExp => {
  // Converte a máscara em um padrão regex
  const pattern = mask
    .replace(/0/g, '\\d')
    .replace(/\./g, '\\.')
    .replace(/-/g, '\\-')
    .replace(/\//g, '\\/')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/ /g, '\\s');
  
  return new RegExp(`^${pattern}$`);
}; 