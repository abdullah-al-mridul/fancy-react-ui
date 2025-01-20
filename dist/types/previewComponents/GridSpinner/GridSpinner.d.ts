import React from "react";
import "./GridSpinner.css";
import { GridSpinnerProps } from "./types";
/**
 * GridSpinner component displays a loading animation with grid blocks
 * @param {GridSpinnerProps} props - The props for the GridSpinner component
 * @example
 * ```tsx
 * <GridSpinner
 *   size={48}
 *   color="#2196F3"
 *   speed={1}
 *   gap={4}
 *   blockSize={8}
 * />
 * ```
 * @returns {JSX.Element} GridSpinner component
 */
declare const GridSpinner: React.FC<GridSpinnerProps>;
export default GridSpinner;
