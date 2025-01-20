import React from "react";
import "./CubeSpinner.css";
import { CubeSpinnerProps } from "./types";

/**
 * CubeSpinner component displays a loading animation with a rotating 3D cube
 * @param {CubeSpinnerProps} props - The props for the CubeSpinner component
 * @example
 * ```tsx
 * <CubeSpinner
 *   size={48}
 *   color="#2196F3"
 *   speed={1}
 *   perspective={800}
 * />
 * ```
 * @returns {JSX.Element} CubeSpinner component
 */
const CubeSpinner: React.FC<CubeSpinnerProps> = ({
  size = 40,
  color = "#2196f3",
  speed = 1,
  perspective = 800,
  className = "",
  style = {},
}) => {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
          result[3],
          16
        )}`
      : "33, 150, 243"; // Default blue
  };

  return (
    <div
      className={`cube-spinner ${className}`}
      style={{
        width: size,
        height: size,
        perspective: perspective,
        ["--speed" as string]: `${speed}s`,
        ["--size" as string]: `${size}px`,
        ["--color" as string]: color,
        ["--color-rgb" as string]: hexToRgb(color),
        ...style,
      }}
    >
      <div className="cube">
        <div className="face front" />
        <div className="face back" />
        <div className="face right" />
        <div className="face left" />
        <div className="face top" />
        <div className="face bottom" />
      </div>
    </div>
  );
};

export default CubeSpinner;
