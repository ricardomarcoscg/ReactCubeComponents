import { RegisterOptions, UseFormReturn } from "react-hook-form";
import { InputElement } from "./cbInput";

export interface ValidatorFn {
  (value: any): boolean | string;
}

export type MaskType = string | ((value: string) => string);

export interface InputElementProps {
  name: string;
  label?: string;
  type?: string;
  icon?: string;
  mError?: string;
  placeHolder?: string;
  mask?: string | ((value: string) => string);
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  validators?: { name: string; value: RegisterOptions }[];
  hint?: string;
  defaultValue?: string;
}

export interface CubeInputInterface {
  element: InputElement;
  form: UseFormReturn<any>;
}