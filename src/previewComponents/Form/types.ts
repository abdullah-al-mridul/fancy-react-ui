import { HTMLAttributes, ReactNode } from "react";

export type FormValidationRule = {
  required?: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validate?: (value: any, formValues?: Record<string, any>) => boolean | string;
  message?: string;
};

export type FormFieldProps = {
  name: string;
  label?: ReactNode;
  rules?: FormValidationRule;
  error?: string;
  touched?: boolean;
  onChange?: (value: any) => void;
  onBlur?: () => void;
};

export interface InputProps extends FormFieldProps {
  type?: "text" | "password" | "email" | "number" | "tel";
  placeholder?: string;
  value?: string | number;
}

export interface SelectProps extends FormFieldProps {
  options: Array<{ label: string; value: string | number }>;
  value?: string | number;
  placeholder?: string;
}

export interface CheckboxProps extends Omit<FormFieldProps, "label"> {
  checked?: boolean;
  children?: ReactNode;
}

export interface FormProps
  extends Omit<HTMLAttributes<HTMLFormElement>, "onError"> {
  onSubmit?: (values: Record<string, any>) => void;
  onError?: (errors: Record<string, string>) => void;
  children?: ReactNode;
  initialValues?: Record<string, any>;
}

export interface FormContextType {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  setFieldValue: (name: string, value: any) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
  validateField: (name: string) => void;
}
