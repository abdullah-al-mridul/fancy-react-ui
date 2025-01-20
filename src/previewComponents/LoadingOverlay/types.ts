import { CSSProperties } from "react";
import * as Spinners from "../../index";

type SpinnerTypes = keyof Omit<
  typeof Spinners,
  "Progress" | "LoadingOverlay" | `${string}Props`
>;

export interface SpinnerProps extends Record<string, any> {
  /**
   * Type of spinner to display
   * @default "BorderSpinner"
   */
  type: SpinnerTypes;
  /**
   * Size of the spinner in pixels
   * @default 48
   */
  size?: number;
  /**
   * Color of the spinner
   * @default "#ffffff"
   */
  color?: string;
}

export interface LoadingOverlayProps {
  /**
   * Whether the overlay is visible
   * @default true
   */
  active?: boolean;
  /**
   * Props for the spinner component
   */
  spinnerProps?: SpinnerProps;
  /**
   * Text to display below the spinner
   */
  text?: string;
  /**
   * Style object for the text
   */
  textStyle?: CSSProperties;
  /**
   * Background color of the overlay
   * @default "rgba(0, 0, 0, 0.7)"
   */
  overlayColor?: string;
  /**
   * Style object for the container
   */
  containerStyle?: CSSProperties;
  /**
   * Additional CSS class name
   */
  className?: string;
}
