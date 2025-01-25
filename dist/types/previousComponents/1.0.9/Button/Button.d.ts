import React from "react";
import "./Button.css";
import { ButtonProps } from "./types";
/**
 * Button component provides a customizable button with various styles and states
 * @param {ButtonProps} props - The props for the Button component
 * @example
 * ```tsx
 * <Button
 *   variant="primary"
 *   size="medium"
 *   onClick={() => console.log('clicked')}
 * >
 *   Click Me
 * </Button>
 * ```
 */
declare const Button: React.FC<ButtonProps>;
export default Button;
