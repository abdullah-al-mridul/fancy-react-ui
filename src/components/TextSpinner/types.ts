import { BaseSpinnerProps } from "../types";

export interface TextSpinnerProps extends Omit<BaseSpinnerProps, "size"> {
  /**
   * Text to display before the animated dots
   * @default "Loading"
   */
  text?: string;
  /**
   * Font size in pixels
   * @default 16
   */
  size?: number;
  /**
   * Number of animated dots
   * @default 3
   */
  dotCount?: number;
}
