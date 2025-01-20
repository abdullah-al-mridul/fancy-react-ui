import React from "react";
import "./PacmanSpinner.css";
import { PacmanSpinnerProps } from "./types";

/**
 * PacmanSpinner component displays a loading animation inspired by Pac-Man
 * @param {PacmanSpinnerProps} props - The props for the PacmanSpinner component
 * @example
 * ```tsx
 * <PacmanSpinner
 *   size={48}
 *   color="#FFEB3B"
 *   speed={1}
 *   dotCount={4}
 * />
 * ```
 * @returns {JSX.Element} PacmanSpinner component
 */
const PacmanSpinner: React.FC<PacmanSpinnerProps> = ({
  size = 40,
  color = "#FFEB3B",
  speed = 1,
  dotCount = 4,
  dotSize = 6,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`pacman-spinner ${className}`}
      style={{
        width: size * 1.5,
        height: size,
        ["--speed" as string]: `${speed}s`,
        ["--dot-size" as string]: `${Math.max(4, size * 0.15)}px`,
        ...style,
      }}
    >
      <div
        className="pacman"
        style={{
          width: size,
          height: size,
        }}
      >
        <div
          className="pacman-top"
          style={{
            backgroundColor: color,
          }}
        />
        <div
          className="pacman-bottom"
          style={{
            backgroundColor: color,
          }}
        />
      </div>
      <div className="dots">
        {[...Array(dotCount)].map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              backgroundColor: color,
              animationDelay: `${(i * speed) / dotCount}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PacmanSpinner;
