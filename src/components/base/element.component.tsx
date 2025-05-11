import React from 'react';
import { Control, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { generateRandomId } from '../../utils/functionBase';

export interface Validator {
  name: string;
  value?: any;
  pattern?: RegExp | string;
}

export interface BaseElementProps {
  name: string;
  label?: string;
  mError?: string;
  hint?: string;
  disabled?: boolean;
  validators?: Validator[];
  defaultValue?: string;
}

export class BaseElement {
  name: string;
  label: string;
  validators: Validator[] = [];
  mError: string = '';
  hint: string = '';
  autofocus: boolean = false;
  comp: string = '';
  defaultValue: string;
  private _disabled = false;
  private _id: string;

  constructor(props: BaseElementProps) {
    this.name = props.name;
    this.label = props.label || '';
    this.hint = props.hint || '';
    this.validators = props.validators || [];
    this.mError = props.mError || '';
    this.defaultValue = props.defaultValue || '';
    this._disabled = props.disabled || false;
    this._id = generateRandomId(this.name.toLowerCase());
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  public showError(errors: FieldErrors, touchedFields: any, dirtyFields: any, values: any): boolean {
    const isTouched = touchedFields[this.name];
    const hasError = !!errors[this.name];
    const isEmpty = !values[this.name];
    const isRequired = this.isRequired();

    return (isTouched && isRequired && isEmpty) || hasError;
  }

  public getErrorMessage(errors: FieldErrors, values: any): string {
    const error = errors[this.name];
    if (error?.message) {
      return error.message as string;
    }
    if (this.isRequired() && !values[this.name]) {
      return this.mError || 'Campo obrigatório';
    }
    return '';
  }

  public showSuccess(errors: FieldErrors): boolean {
    return this.defaultValue != null && this.defaultValue !== '' && !this.showError(errors, {}, {}, {});
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public isRequired(): boolean {
    return this.validators.some(v => v.name === 'required');
  }

  setAutofocus(autofocus: boolean): this {
    this.autofocus = autofocus;
    return this;
  }

  setComp(comp: string): this {
    this.comp = comp;
    return this;
  }
}

export interface ElementComponentProps<T extends BaseElement> {
  element: T;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  control: Control<FieldValues>;
  onModelChange?: (value: any) => void;
}

export abstract class ElementComponent<T extends BaseElement> extends React.Component<ElementComponentProps<T>> {
  private elementRef = React.useRef<HTMLElement>(null);

  componentDidMount(): void {
    if (this.props.onModelChange) {
      this.props.onModelChange(this.props.element.defaultValue);
    }
  }

  getErrorMessage(): string {
    return this.props.element.getErrorMessage(this.props.errors, {});
  }
} 