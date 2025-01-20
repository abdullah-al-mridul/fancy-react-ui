import React from "react";
import "./Spinner.css";
import { SpinnerProps } from "./types";
/**
 * Spinner component displays a loading animation with various styles
 * @param {SpinnerProps} props - The props for the Spinner component
 * @example
 * ```tsx
 * <Spinner
 *   size={50}
 *   color="#F44336"
 *   speed={0.6}
 * />
 * ```
 * @returns {JSX.Element} Spinner component
 */
declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
