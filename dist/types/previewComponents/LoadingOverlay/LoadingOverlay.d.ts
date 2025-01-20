import React from "react";
import "./LoadingOverlay.css";
import { LoadingOverlayProps } from "./types";
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
declare const LoadingOverlay: React.FC<LoadingOverlayProps>;
export default LoadingOverlay;
