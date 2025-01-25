import { ButtonHTMLAttributes } from "react";
export type ButtonVariant = "default" | "primary" | "secondary" | "success" | "warning" | "error";
export type ButtonVariantType = "solid" | "outline" | "link";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    size?: "small" | "medium" | "large" | number;
    weight?: "normal" | "medium" | "semibold" | "bold";
    variant?: ButtonVariant;
    variantType?: ButtonVariantType;
    isLoading?: boolean;
    disableShine?: boolean;
    disableBorder?: boolean;
    href?: string;
    disabled?: boolean;
}
