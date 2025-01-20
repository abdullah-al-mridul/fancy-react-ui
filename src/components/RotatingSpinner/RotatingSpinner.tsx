import React, { JSX } from "react";
import "./RotatingSpinner.css";
import { RotatingSpinnerProps } from "./types";

/**
 * RotatingSpinner component displays a loading animation with nested rotating rings
 * @param {RotatingSpinnerProps} props - The props for the RotatingSpinner component
 * @example
 * ```tsx
 * <RotatingSpinner
 *   size={50}
 *   color="#F44336"
 *   speed={0.8}
 *   thickness={3}
 *   ringCount={3}
 * />
 * ```
 * @returns {JSX.Element} RotatingSpinner component
 */
const RotatingSpinner: React.FC<RotatingSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  speed = 0.8,
  thickness = 3,
  ringCount = 3,
  className = "",
  style = {},
}) => {
  const createNestedRings = (index: number): JSX.Element | null => {
    if (index >= ringCount) return null;

    const currentSize = 100 - index * (100 / ringCount);
    const currentSpeed = speed * (1 + index * 0.5);

    return (
      <div
        className="rotating-ring"
        style={{
          width: `${currentSize}%`,
          height: `${currentSize}%`,
          borderWidth: thickness,
          borderColor: color,
          animationDuration: `${currentSpeed}s`,
        }}
      >
        {createNestedRings(index + 1)}
      </div>
    );
  };

  return (
    <div
      className={`rotating-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      {createNestedRings(0)}
    </div>
  );
};

export default RotatingSpinner;
