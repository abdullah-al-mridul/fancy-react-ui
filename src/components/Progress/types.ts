export interface ProgressGradient {
  colors: string[];
}

export interface ProgressProps {
  /**
   * The progress value (0-100)
   * @default 10
   */
  value?: number;
  /**
   * The color of the progress bar
   * @default "#0066ff"
   */
  color?: string;
  /**
   * The height of the progress bar in pixels
   * @default 8
   */
  height?: number;
  /**
   * Show percentage text
   * @default false
   */
  showPercentage?: boolean;
  /**
   * Background color of the progress container
   * @default "#f0f0f0"
   */
  backgroundColor?: string;
  /**
   * Border radius in pixels
   * @default 4
   */
  borderRadius?: number;
  /**
   * Enable progress bar animation
   * @default true
   */
  animated?: boolean;
  /**
   * Color of the percentage text
   * @default auto (white or black based on progress)
   */
  textColor?: string;
  /**
   * Size of the percentage text in pixels
   * @default 12
   */
  textSize?: number;
  /**
   * Position of the percentage text
   * @default "center"
   */
  textPosition?: "left" | "center" | "right";
  /**
   * Enable striped effect
   * @default false
   */
  striped?: boolean;
  /**
   * Gradient configuration
   */
  gradient?: ProgressGradient;
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}
