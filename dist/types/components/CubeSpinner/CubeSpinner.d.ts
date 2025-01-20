import React from "react";
import "./CubeSpinner.css";
import { CubeSpinnerProps } from "./types";
/**
 * CubeSpinner component displays a loading animation with a rotating 3D cube
 * @param {CubeSpinnerProps} props - The props for the CubeSpinner component
 * @example
 * ```tsx
 * <CubeSpinner
 *   size={48}
 *   color="#2196F3"
 *   speed={1}
 *   perspective={800}
 * />
 * ```
 * @returns {JSX.Element} CubeSpinner component
 */
declare const CubeSpinner: React.FC<CubeSpinnerProps>;
export default CubeSpinner;
