import React, { ReactNode, HTMLAttributes } from "react";
interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg";
}
interface InputGroupTextProps extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    className?: string;
}
interface InputGroupButtonProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}
interface InputGroupAddonProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}
export declare const InputGroup: React.FC<InputGroupProps> & {
    Text: React.FC<InputGroupTextProps>;
    Prepend: React.FC<InputGroupAddonProps>;
    Append: React.FC<InputGroupAddonProps>;
    Button: React.FC<InputGroupButtonProps>;
};
export default InputGroup;
