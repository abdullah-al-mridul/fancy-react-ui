import React from "react";
import "./DualRingSpinner.css";
import { DualRingSpinnerProps } from "./types";
/**
 * DualRingSpinner component displays a loading animation with two rotating rings
 * @param {DualRingSpinnerProps} props - The props for the DualRingSpinner component
 * @example
 * ```tsx
 * <DualRingSpinner
 *   size={48}
 *   color="#2196F3"
 *   speed={1}
 *   thickness={3}
 *   secondaryColor="#90CAF9"
 * />
 * ```
 * @returns {JSX.Element} DualRingSpinner component
 */
declare const DualRingSpinner: React.FC<DualRingSpinnerProps>;
export default DualRingSpinner;
