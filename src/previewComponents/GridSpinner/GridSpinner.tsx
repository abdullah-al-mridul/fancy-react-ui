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
const GridSpinner: React.FC<GridSpinnerProps> = ({
  size = 40,
  color = "#0066ff",
  speed = 1,
  gap = 4,
  blockSize = 8,
  className = "",
  style = {},
}) => {
  const blocks = 9; // 3x3 grid
  const totalSize = blockSize * 3 + gap * 2;
  const scale = size / totalSize;

  return (
    <div
      className={`grid-spinner ${className}`}
      style={{
        width: size,
        height: size,
        ["--speed" as string]: `${speed}s`,
        ["--gap" as string]: `${gap}px`,
        ["--scale" as string]: scale,
        ["--block-size" as string]: `${blockSize}px`,
        ...style,
      }}
    >
      {[...Array(blocks)].map((_, i) => (
        <div
          key={i}
          className="grid-block"
          style={{
            backgroundColor: color,
            width: blockSize,
            height: blockSize,
            animationDelay: `${(i * speed) / blocks}s`,
          }}
        />
      ))}
    </div>
  );
};

export default GridSpinner;
