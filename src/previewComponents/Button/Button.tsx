import React from "react";
import "./Button.css";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  text = "Button",
  style = {},
  size = "medium",
  weight = "medium",
  variant = "default",
  variantType = "solid",
  isLoading = false,
  disableShine = false,
  disableBorder = false,
  href,
  onClick,
  disabled = false,
  ...props
}) => {
  const customSize = typeof size === "number";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
    onClick?.(e);
  };

  return (
    <button
      style={{
        ...style,
        ...(customSize && { fontSize: `${size}px` }),
      }}
      className="_fancy_react_ui_btn"
      data-loading={isLoading}
      data-size={customSize ? "custom" : size}
      data-weight={weight}
      data-variant={variant}
      data-variant-type={variantType}
      data-disable-shine={disableShine}
      data-disable-border={disableBorder}
      data-disabled={disabled}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      <span className="spinner" />
      <span className="ripple" />
      {!disableShine && <span className="shine" />}
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
