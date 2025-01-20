import React from "react";
import "./ChaseSpinner.css";
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
const ChaseSpinner: React.FC<ChaseSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  speed = 0.8,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`chase-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ["--speed" as string]: `${speed}s`,
        ...style,
      }}
    >
      <div className="chase-circle">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="chase-dot"
            style={{
              backgroundColor: color,
              transform: `rotate(${i * 45}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChaseSpinner;
