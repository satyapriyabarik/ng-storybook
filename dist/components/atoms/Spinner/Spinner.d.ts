import React from "react";
export type SpinnerVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    animation?: "border" | "grow";
    variant?: SpinnerVariant;
    size?: "sm" | "lg";
    as?: React.ElementType;
    role?: string;
    label?: string;
}
export declare const Spinner: React.FC<SpinnerProps>;
export default Spinner;
