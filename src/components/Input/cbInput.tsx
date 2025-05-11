import React, { useRef } from 'react';
import { Controller, RegisterOptions } from 'react-hook-form';
import { BaseElement } from '../base/element.component';
import { CubeInputInterface, InputElementProps } from './cbTypes';
import { applyMask } from '../base/utils';
import './cbInputStyle.css';

export class InputElement extends BaseElement {
  type: string;
  icon: string;
  placeHolder: string;
  mask?: string | ((value: string) => string);
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  validators: { name: string; value: RegisterOptions }[];

  constructor(props: InputElementProps) {
    super(props);
    this.name = props.name;
    this.label = props.label || '';
    this.type = props.type || 'text';
    this.icon = props.icon || '';
    this.mError = props.mError || '';
    this.placeHolder = props.placeHolder || '';
    this.mask = props.mask;
    this.maxLength = props.maxLength;
    this.min = props.min;
    this.max = props.max;
    this.step = props.step;
    this.disabled = props.disabled || false;
    this.validators = props.validators || [];
    this.hint = props.hint || '';
    this.defaultValue = props.defaultValue || '';
  }

  setMask(mask: string | ((value: string) => string)): this {
    this.mask = mask;
    return this;
  }

  setIcon(icon: string): this {
    this.icon = icon;
    return this;
  }

  setStep(step: number | any): this {
    this.step = step;
    return this;
  }

  required(message?: string): this {
    this.validators.push({
      name: 'required',
      value: { required: message || 'Campo obrigatório' }
    });
    return this;
  }

  addValidator(name: string, value: RegisterOptions): this {
    this.validators.push({ name, value });
    return this;
  }

  getValidationRules(): RegisterOptions {
    const rules: RegisterOptions = {};
    
    // Adiciona todos os validadores
    this.validators.forEach(validator => {
      if (validator.name === 'required') {
        rules.required = validator.value.required;
      } else if (validator.name === 'pattern') {
        rules.pattern = validator.value.pattern;
      }
    });

    // Adiciona outras regras
    if (this.maxLength) {
      rules.maxLength = this.maxLength;
    }
    if (this.min !== undefined) {
      rules.min = this.min;
    }
    if (this.max !== undefined) {
      rules.max = this.max;
    }

    return rules;
  }

  isRequired(): boolean {
    return this.validators.some(v => v.name === 'required');
  }

  showError(errors: any, touchedFields: any, dirtyFields: any, values: any): boolean {
    const error = errors[this.name];
    const isTouched = touchedFields[this.name];
    const value = values[this.name];
    return (isTouched && error) || (value && error);
  }

  getErrorMessage(errors: any, values: any): string {
    const error = errors[this.name];
    return error?.message as string || this.mError;
  }

  setMaxLength(maxLength: number): this {
    this.maxLength = maxLength;
    return this;
  }
}

export const CubeInput: React.FC<CubeInputInterface> = ({ element, form }) => {
  const { formState: { errors, touchedFields } } = form;
  const showError = element.showError(errors, touchedFields, {}, {});
  const errorMessage = element.getErrorMessage(errors, {});
  const inputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (element.defaultValue) {
      form.setValue(element.name, element.defaultValue);
    }
  }, [element.defaultValue, element.name, form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: string) => void) => {
    const value = e.target.value;
    let maskedValue = value;

    if (element.mask) {
      const mask = typeof element.mask === 'function' ? element.mask(value) : element.mask;
      maskedValue = applyMask(value, mask);
    }

    onChange(maskedValue);
    form.trigger(element.name);
  };

  return (
    <div className="cube-input">
      <div className={`input-label ${element.isRequired() && !element.disabled ? 'label-required' : ''}`}>
        {element.label}
      </div>
      <div className={`input-group ${showError ? 'error' : ''}`}>
        <Controller
          name={element.name}
          control={form.control}
          defaultValue={element.defaultValue || ''}
          rules={element.getValidationRules()}
          render={({ field }) => (
            <>
              <input
                {...field}
                ref={inputRef}
                value={field.value || ''}
                onChange={(e) => handleChange(e, field.onChange)}
                onBlur={(e) => {
                  field.onBlur();
                  form.trigger(element.name);
                }}
                className="form-control"
                id={element.id}
                step={element.step}
                maxLength={element.maxLength}
                type={element.type}
                placeholder={element.placeHolder}
                autoFocus={element.autofocus}
                disabled={element.disabled}
              />
              {!showError && element.icon && (
                <span className="material-symbols-outlined">
                  {element.icon}
                </span>
              )}
              {showError && (
                <span className="material-symbols-outlined error-icon">
                  cancel
                </span>
              )}
            </>
          )}
        />
      </div>
      <div className="input-hint">
        {showError && <div className="show-msg-hint">{errorMessage}</div>}
      </div>
    </div>
  );
}; 