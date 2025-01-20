import { BaseSpinnerProps } from "../types";
export interface PacmanSpinnerProps extends BaseSpinnerProps {
    /**
     * Number of dots to chase
     * @default 4
     */
    dotCount?: number;
    /**
     * Size of each dot in pixels
     * @default 6
     */
    dotSize?: number;
}
