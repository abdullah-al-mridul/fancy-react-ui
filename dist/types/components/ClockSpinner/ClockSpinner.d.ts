import React from "react";
import "./ClockSpinner.css";
import { ClockSpinnerProps } from "./types";
/**
 * ClockSpinner component displays a loading animation resembling a clock
 * @param {ClockSpinnerProps} props - The props for the ClockSpinner component
 * @example
 * ```tsx
 * <ClockSpinner
 *   size={48}
 *   color="#F44336"
 *   speed={1}
 *   thickness={2}
 * />
 * ```
 * @returns {JSX.Element} ClockSpinner component
 */
declare const ClockSpinner: React.FC<ClockSpinnerProps>;
export default ClockSpinner;
