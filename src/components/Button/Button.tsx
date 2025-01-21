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
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  fullWidth = false,
  className = "",
  style = {},
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading && !disabled && onClick) {
      onClick(e);
    }
  };

  const getLoaderSize = () => {
    switch (size) {
      case "small":
        return 14;
      case "large":
        return 20;
      default:
        return 16;
    }
  };

  const getLoaderColor = () => {
    if (variant === "primary") return "white";
    if (variant === "secondary") return "#333";
    return "#0066ff";
  };

  return (
    <button
      className={`fancy-button ${variant} ${size} ${
        fullWidth ? "full-width" : ""
      } ${loading ? "loading" : ""} ${className}`}
      disabled={disabled || loading}
      style={style}
      onClick={handleClick}
      {...props}
    >
      <span className="button-content" style={{ opacity: loading ? 0 : 1 }}>
        {children}
      </span>
      {loading && (
        <span
          className="button-loader"
          style={{
            width: getLoaderSize(),
            height: getLoaderSize(),
            borderColor: `${getLoaderColor()}33`,
            borderTopColor: getLoaderColor(),
          }}
        />
      )}
    </button>
  );
};

export default Button;
