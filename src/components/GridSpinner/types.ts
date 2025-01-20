import { BaseSpinnerProps } from "../types";

export interface GridSpinnerProps extends BaseSpinnerProps {
  /**
   * Gap between grid blocks in pixels
   * @default 4
   */
  gap?: number;
  /**
   * Size of each block in pixels
   * @default 8
   */
  blockSize?: number;
}
