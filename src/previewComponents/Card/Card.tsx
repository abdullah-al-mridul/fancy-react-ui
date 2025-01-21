import React from "react";
import "./Card.css";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  variant = "default",
  hoverable = false,
  bordered = true,
  className = "",
  style,
  cover,
  actions,
  extra,
  ...props
}) => {
  return (
    <div
      className={`fancy-card ${variant} ${hoverable ? "hoverable" : ""} ${
        bordered ? "bordered" : ""
      } ${className}`}
      style={style}
      {...props}
    >
      {cover && <div className="card-cover">{cover}</div>}

      <div className="card-content">
        {(title || subtitle || extra) && (
          <div className="card-header">
            <div className="card-titles">
              {title && <div className="card-title">{title}</div>}
              {subtitle && <div className="card-subtitle">{subtitle}</div>}
            </div>
            {extra && <div className="card-extra">{extra}</div>}
          </div>
        )}

        <div className="card-body">{children}</div>

        {actions && <div className="card-actions">{actions}</div>}
      </div>
    </div>
  );
};

export default Card;
