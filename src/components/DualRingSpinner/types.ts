import { BaseSpinnerProps } from "../types";

export interface DualRingSpinnerProps extends BaseSpinnerProps {
  /**
   * Thickness of the rings in pixels
   * @default 3
   */
  thickness?: number;
  /**
   * Color of the inner ring (defaults to primary color if not specified)
   */
  secondaryColor?: string;
}
