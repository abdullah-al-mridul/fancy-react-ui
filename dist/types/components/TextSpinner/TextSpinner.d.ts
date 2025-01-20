import React from "react";
import "./TextSpinner.css";
import { TextSpinnerProps } from "./types";
/**
 * TextSpinner component displays a loading text with animated dots
 * @param {TextSpinnerProps} props - The props for the TextSpinner component
 * @example
 * ```tsx
 * <TextSpinner
 *   text="Loading"
 *   size={16}
 *   color="#333"
 *   speed={1}
 *   dotCount={3}
 * />
 * ```
 * @returns {JSX.Element} TextSpinner component
 */
declare const TextSpinner: React.FC<TextSpinnerProps>;
export default TextSpinner;
