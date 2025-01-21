import React from "react";
import "./PulseSpinner.css";
import { PulseSpinnerProps } from "./types";

/**
 * PulseSpinner component displays a loading animation with various styles
 * @param {PulseSpinnerProps} props - The props for the PulseSpinner component
 * @example
 * ```tsx
 * <PulseSpinner
 *   size={50}
 *   color="#F44336"
 *   speed={0.6}
 * />
 * ```
 * @returns {JSX.Element} PulseSpinner component
 */
const PulseSpinner: React.FC<PulseSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  speed = 0.8,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`pulse-spinner ${className}`}
      style={{
        width: size,
        height: size,
        animationDuration: `${speed}s`,
        ...style,
      }}
    >
      <div className="pulse-circle" style={{ backgroundColor: color }} />
    </div>
  );
};

export default PulseSpinner;
