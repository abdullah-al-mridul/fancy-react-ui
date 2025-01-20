import React from "react";
// import "./PixelSpinner.css";
import { PixelSpinnerProps } from "./types";

/**
 * PixelSpinner component displays a retro-style loading animation
 * @param {PixelSpinnerProps} props - The props for the PixelSpinner component
 * @example
 * ```tsx
 * <PixelSpinner
 *   size={48}
 *   color="#2196F3"
 *   text="Loading"
 *   pixelSize={4}
 * />
 * ```
 * @returns {JSX.Element} PixelSpinner component
 */
const PixelSpinner: React.FC<PixelSpinnerProps> = ({
  size = 40,
  color = "#2196f3",
  text = "Loading",
  speed = 1,
  pixelSize = 4,
  className = "",
  style = {},
}) => {
  const pixels = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div
      className={`pixel-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ["--speed" as string]: `${speed}s`,
        ["--color" as string]: color,
        ["--pixel-size" as string]: `${pixelSize}px`,
        ...style,
      }}
    >
      <div className="pixel-grid">
        {pixels.map((i) => (
          <div
            key={i}
            className="pixel"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
      {text && <div className="pixel-text">{text}</div>}
    </div>
  );
};

export default PixelSpinner;
