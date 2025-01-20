import React from "react";
import "./TypingSpinner.css";
import { TypingSpinnerProps } from "./types";
/**
 * TypingSpinner component displays a loading animation resembling a typing indicator
 * @param {TypingSpinnerProps} props - The props for the TypingSpinner component
 * @example
 * ```tsx
 * <TypingSpinner
 *   size={48}
 *   color="#2196F3"
 *   speed={1}
 *   dotCount={3}
 * />
 * ```
 * @returns {JSX.Element} TypingSpinner component
 */
declare const TypingSpinner: React.FC<TypingSpinnerProps>;
export default TypingSpinner;
