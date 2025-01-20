import React from "react";
import "./HeartbeatSpinner.css";
import { HeartbeatSpinnerProps } from "./types";

/**
 * HeartbeatSpinner component displays a loading animation with a pulsing heart effect
 * @param {HeartbeatSpinnerProps} props - The props for the HeartbeatSpinner component
 * @example
 * ```tsx
 * <HeartbeatSpinner
 *   size={48}
 *   color="#FF4B4B"
 *   speed={1}
 * />
 * ```
 * @returns {JSX.Element} HeartbeatSpinner component
 */
const HeartbeatSpinner: React.FC<HeartbeatSpinnerProps> = ({
  size = 40,
  color = "#FF4B4B",
  speed = 1,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`heartbeat-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ["--speed" as string]: `${speed}s`,
        ...style,
      }}
    >
      <div
        className="heart"
        style={{
          borderColor: color,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default HeartbeatSpinner;
