import { BaseSpinnerProps } from "../types";

export interface CubeSpinnerProps extends BaseSpinnerProps {
  /**
   * Perspective distance in pixels for 3D effect
   * @default 800
   */
  perspective?: number;
}
