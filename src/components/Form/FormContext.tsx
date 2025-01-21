import React, { createContext, useContext } from "react";
import { FormContextType } from "./types";

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Form components must be used within a Form");
  }
  return context;
};
