import React from "react";
import "./Progress.css";
import { ProgressProps } from "./types";

/**
 * Progress component displays a progress bar with various styles
 * @param {ProgressProps} props - The props for the Progress component
 * @example
 * ```tsx
 * <Progress
 *   value={50}
 *   color="#F44336"
 *   showPercentage={true}
 *   textColor="#fff"
 *   textSize={14}
 *   textPosition="center"
 *   striped={true}
 *   gradient={{ colors: ["#FF6B6B", "#FF9F40"] }}
 * />
 * ```
 * @returns {JSX.Element} Progress component
 */
const Progress: React.FC<ProgressProps> = ({
  value = 10,
  color = "#0066ff",
  height = 8,
  showPercentage = false,
  backgroundColor = "#f0f0f0",
  borderRadius = 4,
  animated = true,
  textColor,
  textSize = 12,
  textPosition = "center",
  striped = false,
  gradient,
  className = "",
  style = {},
}: ProgressProps) => {
  const percentage = Math.min(100, Math.max(0, value));

  const getGradientBackground = () => {
    if (gradient?.colors) {
      return `linear-gradient(to right, ${gradient.colors.join(", ")})`;
    }
    return backgroundColor;
  };

  const getTextAlignment = () => {
    switch (textPosition) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  };

  return (
    <div
      className={`progress-container ${className}`}
      style={{
        height,
        backgroundColor,
        borderRadius,
        ...style,
      }}
    >
      <div
        className={`progress-bar ${animated ? "animated" : ""} ${
          striped ? "striped" : ""
        }`}
        style={{
          width: `${percentage}%`,
          backgroundColor: gradient ? undefined : color,
          background: gradient ? getGradientBackground() : undefined,
          borderRadius: `${borderRadius}px`,
        }}
      />
      {showPercentage && (
        <div
          className="progress-text"
          style={{
            color: textColor || (percentage > 50 ? "#fff" : "#000"),
            fontSize: textSize,
            justifyContent: getTextAlignment(),
          }}
        >
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default Progress;
