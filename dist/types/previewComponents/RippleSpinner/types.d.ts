import { BaseSpinnerProps } from "../types";
export interface RippleSpinnerProps extends BaseSpinnerProps {
    /**
     * Thickness of the ripple borders in pixels
     * @default 2
     */
    thickness?: number;
    /**
     * Number of ripple circles
     * @default 3
     */
    rippleCount?: number;
}
