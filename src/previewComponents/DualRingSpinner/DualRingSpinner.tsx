import React from "react";
// import "./DualRingSpinner.css";
import { DualRingSpinnerProps } from "./types";

/**
 * DualRingSpinner component displays a loading animation with two rotating rings
 * @param {DualRingSpinnerProps} props - The props for the DualRingSpinner component
 * @example
 * ```tsx
 * <DualRingSpinner
 *   size={48}
 *   color="#2196F3"
 *   speed={1}
 *   thickness={3}
 *   secondaryColor="#90CAF9"
 * />
 * ```
 * @returns {JSX.Element} DualRingSpinner component
 */
const DualRingSpinner: React.FC<DualRingSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  secondaryColor,
  speed = 1,
  thickness = 3,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`dual-ring-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ["--speed" as string]: `${speed}s`,
        ...style,
      }}
    >
      <div
        className="outer-ring"
        style={{
          borderWidth: thickness,
          borderColor: `${color} transparent ${color} transparent`,
        }}
      />
      <div
        className="inner-ring"
        style={{
          borderWidth: thickness,
          borderColor: `${secondaryColor || color} transparent ${
            secondaryColor || color
          } transparent`,
          width: size * 0.65,
          height: size * 0.65,
        }}
      />
    </div>
  );
};

export default DualRingSpinner;
