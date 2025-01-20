import React from "react";
import "./ClockSpinner.css";
import { ClockSpinnerProps } from "./types";

/**
 * ClockSpinner component displays a loading animation resembling a clock
 * @param {ClockSpinnerProps} props - The props for the ClockSpinner component
 * @example
 * ```tsx
 * <ClockSpinner
 *   size={48}
 *   color="#F44336"
 *   speed={1}
 *   thickness={2}
 * />
 * ```
 * @returns {JSX.Element} ClockSpinner component
 */
const ClockSpinner: React.FC<ClockSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  speed = 1,
  thickness = 2,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`clock-spinner ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth: thickness,
        borderColor: color,
        ["--speed" as string]: `${speed}s`,
        ...style,
      }}
    >
      <div
        className="clock-hand hour-hand"
        style={{
          backgroundColor: color,
          height: `${size * 0.3}px`,
          width: thickness,
        }}
      />
      <div
        className="clock-hand minute-hand"
        style={{
          backgroundColor: color,
          height: `${size * 0.4}px`,
          width: thickness,
        }}
      />
      <div
        className="clock-center"
        style={{
          backgroundColor: color,
          width: thickness * 3,
          height: thickness * 3,
        }}
      />
    </div>
  );
};

export default ClockSpinner;
