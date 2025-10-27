import React, { ReactNode } from "react";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Visual style variant (Bootstrap-like) */
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
    /** Adds a close button */
    dismissible?: boolean;
    /** Called when the alert is closed */
    onClose?: () => void;
    /** Children inside the alert */
    children: ReactNode;
    /** Optional heading */
    heading?: ReactNode;
}
/**
 * Bootstrap-style Alert component
 */
export declare const Alert: React.FC<AlertProps>;
export default Alert;
