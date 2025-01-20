import React from "react";
// import "./WaveSpinner.css";
import { WaveSpinnerProps } from "./types";

/**
 * WaveSpinner component displays a loading animation with various styles
 * @param {WaveSpinnerProps} props - The props for the WaveSpinner component
 * @example
 * ```tsx
 * <WaveSpinner
 *   size={50}
 *   color="#F44336"
 *   speed={0.6}
 * />
 * ```
 * @returns {JSX.Element} Spinner component
 */
const WaveSpinner: React.FC<WaveSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  speed = 0.8,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`wave-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="wave-bar"
          style={{
            backgroundColor: color,
            animationDuration: `${speed}s`,
          }}
        />
      ))}
    </div>
  );
};

export default WaveSpinner;
