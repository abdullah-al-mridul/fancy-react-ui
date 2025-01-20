import React from "react";
import "./BorderSpinner.css";
import { BorderSpinnerProps } from "./types";
/**
 * BorderSpinner component displays a loading animation with a circular border
 * @param {BorderSpinnerProps} props - The props for the BorderSpinner component
 * @example
 * ```tsx
 * <BorderSpinner
 *   size={40}
 *   color="#0066ff"
 *   thickness={4}
 *   speed={0.8}
 * />
 * ```
 */
declare const BorderSpinner: React.FC<BorderSpinnerProps>;
export default BorderSpinner;
