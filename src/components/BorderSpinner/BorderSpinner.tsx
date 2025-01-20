import React from "react";
import "./BorderSpinner.css";
import { BorderSpinnerProps } from "./types";

/**
 * BorderSpinner component displays a loading animation with a circular border
 * @param {BorderSpinnerProps} props - The props for the BorderSpinner component
 * @example
 * ```tsx
 * <BorderSpinner
 *   size={40}
 *   color="#0066ff"
 *   thickness={4}
 *   speed={0.8}
 * />
 * ```
 */
const BorderSpinner: React.FC<BorderSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  secondaryColor = "rgba(0, 0, 0, 0.1)",
  thickness = 4,
  speed = 0.8,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`border-spinner ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth: thickness,
        borderColor: secondaryColor,
        borderTopColor: color,
        animationDuration: `${speed}s`,
        ...style,
      }}
    />
  );
};

export default BorderSpinner;
