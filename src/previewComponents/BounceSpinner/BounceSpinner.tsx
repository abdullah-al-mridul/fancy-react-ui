import React from "react";
// import "./BounceSpinner.css";
import { BounceSpinnerProps } from "./types";

/**
 * BounceSpinner component displays a loading animation with bouncing dots
 * @param {BounceSpinnerProps} props - The props for the BounceSpinner component
 * @example
 * ```tsx
 * <BounceSpinner
 *   size={40}
 *   color="#FFC107"
 *   speed={0.8}
 * />
 * ```
 * @returns {JSX.Element} BounceSpinner component
 */
const BounceSpinner: React.FC<BounceSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  speed = 0.8,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`bounce-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
    >
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bounce-dot"
          style={{
            backgroundColor: color,
            animationDuration: `${speed}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BounceSpinner;
