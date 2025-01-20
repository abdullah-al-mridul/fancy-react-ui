import React from "react";
import "./RippleSpinner.css";
import { RippleSpinnerProps } from "./types";
/**
 * RippleSpinner component displays a loading animation with expanding ripple effects
 * @param {RippleSpinnerProps} props - The props for the RippleSpinner component
 * @example
 * ```tsx
 * <RippleSpinner
 *   size={48}
 *   color="#2196F3"
 *   speed={1}
 *   thickness={2}
 *   rippleCount={3}
 * />
 * ```
 * @returns {JSX.Element} RippleSpinner component
 */
declare const RippleSpinner: React.FC<RippleSpinnerProps>;
export default RippleSpinner;
