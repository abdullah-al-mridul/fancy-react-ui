import React from "react";
import "./RippleSpinner.css";
import { RippleSpinnerProps } from "./types";

/**
 * RippleSpinner component displays a loading animation with expanding ripple effects
 * @param {RippleSpinnerProps} props - The props for the RippleSpinner component
 * @example
 * ```tsx
 * <RippleSpinner
 *   size={48}
 *   color="#2196F3"
 *   speed={1}
 *   thickness={2}
 *   rippleCount={3}
 * />
 * ```
 * @returns {JSX.Element} RippleSpinner component
 */
const RippleSpinner: React.FC<RippleSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  speed = 1,
  thickness = 2,
  rippleCount = 3,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`ripple-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ["--speed" as string]: `${speed}s`,
        ...style,
      }}
    >
      {[...Array(rippleCount)].map((_, i) => (
        <div
          key={i}
          className="ripple"
          style={{
            borderWidth: thickness,
            borderColor: color,
            animationDelay: `${(i * speed) / rippleCount}s`,
          }}
        />
      ))}
      <div
        className="ripple-center"
        style={{
          backgroundColor: color,
          width: size * 0.2,
          height: size * 0.2,
        }}
      />
    </div>
  );
};

export default RippleSpinner;
