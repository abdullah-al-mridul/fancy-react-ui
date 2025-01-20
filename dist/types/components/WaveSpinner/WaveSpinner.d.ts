import React from "react";
import "./WaveSpinner.css";
import { WaveSpinnerProps } from "./types";
/**
 * WaveSpinner component displays a loading animation with various styles
 * @param {WaveSpinnerProps} props - The props for the WaveSpinner component
 * @example
 * ```tsx
 * <WaveSpinner
 *   size={50}
 *   color="#F44336"
 *   speed={0.6}
 * />
 * ```
 * @returns {JSX.Element} Spinner component
 */
declare const WaveSpinner: React.FC<WaveSpinnerProps>;
export default WaveSpinner;
