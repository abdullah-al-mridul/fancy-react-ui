import React from "react";
import "./TextSpinner.css";
import { TextSpinnerProps } from "./types";

/**
 * TextSpinner component displays a loading text with animated dots
 * @param {TextSpinnerProps} props - The props for the TextSpinner component
 * @example
 * ```tsx
 * <TextSpinner
 *   text="Loading"
 *   size={16}
 *   color="#333"
 *   speed={1}
 *   dotCount={3}
 * />
 * ```
 * @returns {JSX.Element} TextSpinner component
 */
const TextSpinner: React.FC<TextSpinnerProps> = ({
  text = "Loading",
  size = 16,
  color = "#333333",
  speed = 1,
  dotCount = 3,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`text-spinner ${className}`}
      style={{
        fontSize: size,
        color,
        ["--speed" as string]: `${speed}s`,
        ...style,
      }}
    >
      {text}
      <span className="text-spinner-dots">
        {[...Array(dotCount)].map((_, i) => (
          <span
            key={i}
            className="text-spinner-dot"
            style={{
              animationDelay: `${(i * speed) / dotCount}s`,
            }}
          >
            .
          </span>
        ))}
      </span>
    </div>
  );
};

export default TextSpinner;
