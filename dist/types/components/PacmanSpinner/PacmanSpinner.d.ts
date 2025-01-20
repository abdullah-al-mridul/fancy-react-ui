import React from "react";
import "./PacmanSpinner.css";
import { PacmanSpinnerProps } from "./types";
/**
 * PacmanSpinner component displays a loading animation inspired by Pac-Man
 * @param {PacmanSpinnerProps} props - The props for the PacmanSpinner component
 * @example
 * ```tsx
 * <PacmanSpinner
 *   size={48}
 *   color="#FFEB3B"
 *   speed={1}
 *   dotCount={4}
 * />
 * ```
 * @returns {JSX.Element} PacmanSpinner component
 */
declare const PacmanSpinner: React.FC<PacmanSpinnerProps>;
export default PacmanSpinner;
