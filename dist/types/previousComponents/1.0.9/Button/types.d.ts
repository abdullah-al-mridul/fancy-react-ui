import { ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button variant/style
     */
    variant?: "primary" | "secondary" | "outline" | "text";
    /**
     * Button size
     */
    size?: "small" | "medium" | "large";
    /**
     * Loading state
     */
    loading?: boolean;
    /**
     * Full width button
     */
    fullWidth?: boolean;
}
