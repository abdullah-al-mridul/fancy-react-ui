import React from "react";
import { FormContextType } from "./types";
export declare const FormContext: React.Context<FormContextType | undefined>;
export declare const useForm: () => FormContextType;
