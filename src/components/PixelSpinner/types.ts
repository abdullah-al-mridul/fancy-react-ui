import { BaseSpinnerProps } from "../types";

export interface PixelSpinnerProps extends BaseSpinnerProps {
  /**
   * Text to display below the spinner
   * @default "Loading"
   */
  text?: string;
  /**
   * Size of each pixel in pixels
   * @default 4
   */
  pixelSize?: number;
}
