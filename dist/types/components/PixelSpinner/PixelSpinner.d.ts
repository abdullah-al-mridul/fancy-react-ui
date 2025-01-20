import React from "react";
import "./PixelSpinner.css";
import { PixelSpinnerProps } from "./types";
/**
 * PixelSpinner component displays a retro-style loading animation
 * @param {PixelSpinnerProps} props - The props for the PixelSpinner component
 * @example
 * ```tsx
 * <PixelSpinner
 *   size={48}
 *   color="#2196F3"
 *   text="Loading"
 *   pixelSize={4}
 * />
 * ```
 * @returns {JSX.Element} PixelSpinner component
 */
declare const PixelSpinner: React.FC<PixelSpinnerProps>;
export default PixelSpinner;
