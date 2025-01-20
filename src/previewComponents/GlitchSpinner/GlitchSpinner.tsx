import React from "react";
import "./GlitchSpinner.css";
import { GlitchSpinnerProps } from "./types";

/**
 * GlitchSpinner component displays a loading animation with a glitch effect
 * @param {GlitchSpinnerProps} props - The props for the GlitchSpinner component
 * @example
 * ```tsx
 * <GlitchSpinner
 *   size={48}
 *   color="#2196F3"
 *   text="Loading"
 * />
 * ```
 * @returns {JSX.Element} GlitchSpinner component
 */
const GlitchSpinner: React.FC<GlitchSpinnerProps> = ({
  size = 40,
  color = "#2196f3",
  text = "Loading",
  speed = 1,
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
      : "33, 150, 243";
  };

  return (
    <div
      className={`glitch-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ["--speed" as string]: `${speed}s`,
        ["--color" as string]: color,
        ["--color-rgb" as string]: hexToRgb(color),
        ["--size" as string]: `${size}px`,
        ...style,
      }}
    >
      <div className="glitch-circle">
        <div className="glitch-circle-inner" />
      </div>
      {text && (
        <div className="glitch-text" data-text={text}>
          {text}
        </div>
      )}
      <div className="glitch-scanlines" />
    </div>
  );
};

export default GlitchSpinner;
