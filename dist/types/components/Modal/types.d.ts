import { HTMLAttributes, ReactNode } from "react";
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
    /**
     * Controls if the modal is displayed
     */
    isOpen: boolean;
    /**
     * Called when modal should close
     */
    onClose: () => void;
    /**
     * Modal title
     */
    title?: ReactNode;
    /**
     * Modal content
     */
    children: ReactNode;
    /**
     * Footer content (usually actions)
     */
    footer?: ReactNode;
    /**
     * Modal size
     */
    size?: "small" | "medium" | "large";
    /**
     * Whether to show close button
     */
    closable?: boolean;
    /**
     * Close on backdrop click
     */
    closeOnOverlay?: boolean;
    /**
     * Center modal vertically
     */
    centered?: boolean;
    /**
     * Custom width
     */
    width?: number | string;
}
