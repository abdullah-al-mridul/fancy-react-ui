import React from "react";
import "./GlitchSpinner.css";
import { GlitchSpinnerProps } from "./types";
/**
 * GlitchSpinner component displays a loading animation with a glitch effect
 * @param {GlitchSpinnerProps} props - The props for the GlitchSpinner component
 * @example
 * ```tsx
 * <GlitchSpinner
 *   size={48}
 *   color="#2196F3"
 *   text="Loading"
 * />
 * ```
 * @returns {JSX.Element} GlitchSpinner component
 */
declare const GlitchSpinner: React.FC<GlitchSpinnerProps>;
export default GlitchSpinner;
