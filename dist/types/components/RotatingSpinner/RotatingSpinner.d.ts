import React from "react";
import "./RotatingSpinner.css";
import { RotatingSpinnerProps } from "./types";
/**
 * RotatingSpinner component displays a loading animation with nested rotating rings
 * @param {RotatingSpinnerProps} props - The props for the RotatingSpinner component
 * @example
 * ```tsx
 * <RotatingSpinner
 *   size={50}
 *   color="#F44336"
 *   speed={0.8}
 *   thickness={3}
 *   ringCount={3}
 * />
 * ```
 * @returns {JSX.Element} RotatingSpinner component
 */
declare const RotatingSpinner: React.FC<RotatingSpinnerProps>;
export default RotatingSpinner;
