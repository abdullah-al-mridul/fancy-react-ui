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
declare const HeartbeatSpinner: React.FC<HeartbeatSpinnerProps>;
export default HeartbeatSpinner;
