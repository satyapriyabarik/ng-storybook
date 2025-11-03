import React, { ReactNode, HTMLAttributes } from "react";
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    fluid?: boolean;
    className?: string;
}
interface RowProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    gap?: number;
}
interface ColProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
declare const Row: React.FC<RowProps>;
declare const Col: React.FC<ColProps>;
interface CompoundGrid extends React.FC<ContainerProps> {
    Row: typeof Row;
    Col: typeof Col;
}
declare const Grid: CompoundGrid;
export { Grid, Row, Col };
export default Grid;
