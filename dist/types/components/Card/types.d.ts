import { HTMLAttributes, ReactNode } from "react";
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /**
     * Card title
     */
    title?: ReactNode;
    /**
     * Card subtitle
     */
    subtitle?: ReactNode;
    /**
     * Card variant/style
     */
    variant?: "default" | "elevated" | "outlined" | "filled";
    /**
     * Enable hover effect
     */
    hoverable?: boolean;
    /**
     * Show border
     */
    bordered?: boolean;
    /**
     * Cover image/content
     */
    cover?: ReactNode;
    /**
     * Extra content in header
     */
    extra?: ReactNode;
    /**
     * Action buttons
     */
    actions?: ReactNode;
}
