import React from "react";
export type BadgeVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode;
    variant?: BadgeVariant;
    pill?: boolean;
    bg?: BadgeVariant;
    size?: "sm" | "md" | "lg";
    title?: string;
    /** If provided, render numeric counter (string or number) */
    count?: string | number;
    /** show a small dot instead of content */
    dot?: boolean;
}
/**
 * Badge component (Bootstrap-like)
 */
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
