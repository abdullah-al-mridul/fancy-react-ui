import React, { useState } from "react";
import { FormContext } from "./FormContext";
import { FormProps, FormValidationRule } from "./types";
import "./Form.css";

interface FormElement extends React.ReactElement {
  props: {
    name: string;
    rules?: FormValidationRule;
  };
}

const isFormElement = (child: React.ReactNode): child is FormElement => {
  return (
    React.isValidElement(child) &&
    child.props !== null &&
    typeof child.props === "object" &&
    "name" in child.props
  );
};

const validateFieldValue = (value: any, rules?: FormValidationRule): string => {
  if (!rules) return "";

  if (rules.required && !value) {
    return rules.message || "This field is required";
  }

  if (rules.minLength && String(value).length < rules.minLength) {
    return rules.message || `Minimum length is ${rules.minLength}`;
  }

  if (rules.maxLength && String(value).length > rules.maxLength) {
    return rules.message || `Maximum length is ${rules.maxLength}`;
  }

  if (rules.pattern && !rules.pattern.test(String(value))) {
    return rules.message || "Invalid format";
  }

  if (rules.validate) {
    const result = rules.validate(value);
    if (typeof result === "string") return result;
    if (!result) return rules.message || "Invalid value";
  }

  return "";
};

const Form: React.FC<FormProps> = ({
  onSubmit,
  onError,
  children,
  initialValues = {},
  ...props
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const setFieldValue = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const setFieldTouched = (name: string, isTouched: boolean) => {
    setTouched((prev) => ({ ...prev, [name]: isTouched }));
  };

  const validateField = (name: string): string => {
    const elements = React.Children.toArray(children);
    const field = elements.find((child): child is FormElement => {
      if (!React.isValidElement(child)) return false;
      return isFormElement(child) && child.props.name === name;
    });

    if (field?.props.rules) {
      const error = validateFieldValue(values[name], field.props.rules);
      setErrors((prev) => ({ ...prev, [name]: error }));
      return error;
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    React.Children.forEach(children, (child) => {
      if (isFormElement(child)) {
        const error = validateField(child.props.name);
        if (error) {
          newErrors[child.props.name] = error;
          hasErrors = true;
        }
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      onError?.(newErrors);
      return;
    }

    onSubmit?.(values);
  };

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        validateField,
      }}
    >
      <form {...props} onSubmit={handleSubmit} className="fancy-form">
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
