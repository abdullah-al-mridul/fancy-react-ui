import React from "react";
import "./LoadingOverlay.css";
import { LoadingOverlayProps } from "./types";
import * as Spinners from "../../index";

/**
 * LoadingOverlay component displays a full-screen or container overlay with a spinner
 * @param {LoadingOverlayProps} props - The props for the LoadingOverlay component
 * @example
 * ```tsx
 * <LoadingOverlay
 *   active={true}
 *   spinnerProps={{
 *     type: "BorderSpinner",
 *     size: 48,
 *     color: "#fff"
 *   }}
 *   text="Loading..."
 *   overlayColor="rgba(0, 0, 0, 0.7)"
 * />
 * ```
 * @returns {JSX.Element | null} LoadingOverlay component
 */
const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  active = true,
  spinnerProps = {
    type: "BorderSpinner",
    size: 48,
    color: "#ffffff",
  },
  text,
  textStyle,
  overlayColor = "rgba(0, 0, 0, 0.7)",
  containerStyle,
  className = "",
}) => {
  if (!active) return null;

  const SpinnerComponent = Spinners[spinnerProps.type as keyof typeof Spinners];
  const { type, ...restSpinnerProps } = spinnerProps;

  return (
    <div
      className={`loading-overlay ${className}`}
      style={{
        backgroundColor: overlayColor,
        ...containerStyle,
      }}
    >
      <div className="loading-content">
        {/* <SpinnerComponent {...restSpinnerProps} /> */}
        {text && (
          <div className="loading-text" style={textStyle}>
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingOverlay;
