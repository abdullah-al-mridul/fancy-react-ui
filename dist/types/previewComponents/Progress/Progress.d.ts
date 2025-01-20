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
declare const Progress: React.FC<ProgressProps>;
export default Progress;
