import React from "react";
import "./Spinner.css";
import { SpinnerProps } from "./types";

/**
 * Spinner component displays a loading animation with various styles
 * @param {SpinnerProps} props - The props for the Spinner component
 * @example
 * ```tsx
 * <Spinner
 *   size={50}
 *   color="#F44336"
 *   speed={0.6}
 * />
 * ```
 * @returns {JSX.Element} Spinner component
 */
const Spinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  secondaryColor = "rgba(0, 0, 0, 0.1)",
  thickness = 4,
  speed = 0.8,
  variant = "border",
  className = "",
  style = {},
}) => {
  const getSpinnerContent = () => {
    switch (variant) {
      case "chase":
        return (
          <>
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
            <div className="chase-dot" />
          </>
        );
      case "bounce":
        return (
          <>
            <div className="bounce-dot" />
            <div className="bounce-dot" />
            <div className="bounce-dot" />
          </>
        );
      case "wave":
        return (
          <>
            <div className="wave-bar" />
            <div className="wave-bar" />
            <div className="wave-bar" />
            <div className="wave-bar" />
            <div className="wave-bar" />
          </>
        );
      case "pulse":
        return <div className="pulse-circle" />;
      default:
        return null;
    }
  };

  const spinnerStyle = {
    width: size,
    height: size,
    borderWidth: variant === "border" ? thickness : undefined,
    borderColor: variant === "border" ? secondaryColor : undefined,
    borderTopColor: variant === "border" ? color : undefined,
    animationDuration: `${speed}s`,
    ...style,
  };

  return (
    <div
      className={`spinner spinner-${variant} ${className}`}
      style={spinnerStyle}
    >
      {getSpinnerContent()}
      <style>
        {`
          .spinner-${variant} .chase-dot,
          .spinner-${variant} .bounce-dot,
          .spinner-${variant} .wave-bar,
          .spinner-${variant} .pulse-circle {
            background-color: ${color};
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;
