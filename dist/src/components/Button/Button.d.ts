import React, { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** The button content */
    children: ReactNode;
    /** Visual style variant (matches CSS module classes) */
    variant?: "primary" | "secondary" | "danger" | "success";
    /** Button size (matches CSS module classes) */
    size?: "sm" | "md" | "lg";
    mr?: string;
    ml?: string;
    mt?: string;
    mb?: string;
    /** Optional disabled state */
    disabled?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
