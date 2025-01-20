import React from "react";
import "./BounceSpinner.css";
import { BounceSpinnerProps } from "./types";
/**
 * BounceSpinner component displays a loading animation with bouncing dots
 * @param {BounceSpinnerProps} props - The props for the BounceSpinner component
 * @example
 * ```tsx
 * <BounceSpinner
 *   size={40}
 *   color="#FFC107"
 *   speed={0.8}
 * />
 * ```
 * @returns {JSX.Element} BounceSpinner component
 */
declare const BounceSpinner: React.FC<BounceSpinnerProps>;
export default BounceSpinner;
