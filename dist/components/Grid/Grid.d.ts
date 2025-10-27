import React, { ReactNode, HTMLAttributes } from "react";
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    fluid?: boolean;
    className?: string;
}
export declare const Container: React.FC<ContainerProps>;
interface RowProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    gap?: number;
}
export declare const Row: React.FC<RowProps>;
interface ColProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
export declare const Col: React.FC<ColProps>;
declare const _default: {
    Container: React.FC<ContainerProps>;
    Row: React.FC<RowProps>;
    Col: React.FC<ColProps>;
};
export default _default;
