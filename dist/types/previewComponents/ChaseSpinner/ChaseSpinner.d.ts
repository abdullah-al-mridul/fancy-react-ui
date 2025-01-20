import React from "react";
import { ChaseSpinnerProps } from "./types";
/**
 * ChaseSpinner component displays a loading animation with multiple dots chasing each other in a circular motion
 * @param {ChaseSpinnerProps} props - The props for the ChaseSpinner component
 * @example
 * ```tsx
 * <ChaseSpinner
 *   size={48}
 *   color="#4CAF50"
 *   speed={1.2}
 * />
 * ```
 * @returns {JSX.Element} ChaseSpinner component
 */
declare const ChaseSpinner: React.FC<ChaseSpinnerProps>;
export default ChaseSpinner;
