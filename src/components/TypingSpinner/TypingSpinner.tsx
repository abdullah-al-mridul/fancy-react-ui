import React from "react";
import "./TypingSpinner.css";
import { TypingSpinnerProps } from "./types";

/**
 * TypingSpinner component displays a loading animation resembling a typing indicator
 * @param {TypingSpinnerProps} props - The props for the TypingSpinner component
 * @example
 * ```tsx
 * <TypingSpinner
 *   size={48}
 *   color="#2196F3"
 *   speed={1}
 *   dotCount={3}
 * />
 * ```
 * @returns {JSX.Element} TypingSpinner component
 */
const TypingSpinner: React.FC<TypingSpinnerProps> = ({
  size = 40,
  color = "#2196F3",
  speed = 1,
  dotCount = 3,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`typing-spinner ${className}`}
      style={{
        height: size,
        ["--speed" as string]: `${speed}s`,
        ["--dot-size" as string]: `${size * 0.25}px`,
        ["--dot-color" as string]: color,
        ...style,
      }}
    >
      {[...Array(dotCount)].map((_, i) => (
        <div
          key={i}
          className="typing-dot"
          style={{
            animationDelay: `${(i * speed) / 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default TypingSpinner;
