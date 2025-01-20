import React from "react";
import "./PulseSpinner.css";
import { PulseSpinnerProps } from "./types";
/**
 * PulseSpinner component displays a loading animation with various styles
 * @param {PulseSpinnerProps} props - The props for the PulseSpinner component
 * @example
 * ```tsx
 * <PulseSpinner
 *   size={50}
 *   color="#F44336"
 *   speed={0.6}
 * />
 * ```
 * @returns {JSX.Element} PulseSpinner component
 */
declare const PulseSpinner: React.FC<PulseSpinnerProps>;
export default PulseSpinner;
