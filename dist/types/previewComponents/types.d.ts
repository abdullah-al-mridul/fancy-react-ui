export interface BaseSpinnerProps {
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
     * Speed of the animation in seconds
     * @default 0.8
     */
    speed?: number;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Additional inline styles
     */
    style?: React.CSSProperties;
}
