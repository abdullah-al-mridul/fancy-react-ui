export interface SpinnerProps {
  /**
   * Size of the spinner in pixels
   * @default 40
   */
  size?: number;
  /**
   * Primary color of the spinner
   * @default "#0066ff"
   */
  color?: string;
  /**
   * Secondary color for dual-color spinners
   * @default "rgba(0, 0, 0, 0.1)"
   */
  secondaryColor?: string;
  /**
   * Thickness of the spinner line
   * @default 4
   */
  thickness?: number;
  /**
   * Speed of the animation in seconds
   * @default 0.8
   */
  speed?: number;
  /**
   * Type of spinner animation
   * @default "border"
   */
  variant?: "border" | "chase" | "bounce" | "wave" | "pulse";
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}
