import React from "react";
import { useForm } from "./FormContext";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  placeholder,
  rules,
  onChange,
  onBlur,
  ...props
}) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = type === "number" ? Number(e.target.value) : e.target.value;
    setFieldValue(name, value);
    onChange?.(value);
  };

  const handleBlur = () => {
    setFieldTouched(name, true);
    onBlur?.();
  };

  const error = touched[name] && errors[name];

  return (
    <div className="form-field">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {rules?.required && <span className="required">*</span>}
        </label>
      )}
      <input
        id={name}
        type={type}
        value={values[name] || ""}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`form-input ${error ? "error" : ""}`}
        {...props}
      />
      {error && <div className="form-error">{error}</div>}
    </div>
  );
};

export default Input;
