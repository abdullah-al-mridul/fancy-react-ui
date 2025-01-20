import { BaseSpinnerProps } from "../types";

export interface BorderSpinnerProps extends BaseSpinnerProps {
  /**
   * Secondary color for the spinner
   * @default "rgba(0, 0, 0, 0.1)"
   */
  secondaryColor?: string;
  /**
   * Thickness of the spinner line
   * @default 4
   */
  thickness?: number;
}
