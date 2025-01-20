import { BaseSpinnerProps } from "../types";
export interface RotatingSpinnerProps extends BaseSpinnerProps {
    /**
     * Thickness of the spinner rings in pixels
     * @default 3
     */
    thickness?: number;
    /**
     * Number of rotating rings
     * @default 3
     */
    ringCount?: number;
}
