import React, { ReactNode, HTMLAttributes } from "react";
import styles from "./Grid.module.css";

// ---------------------- Types ----------------------
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    fluid?: boolean;
    className?: string;
}

interface RowProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    gap?: number; // spacing between columns in rem
}

interface ColProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    xs?: number; // 1–12
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

// ---------------------- Components ----------------------
const GridBase: React.FC<ContainerProps> = ({
    children,
    fluid = false,
    className = "",
    ...props
}) => (
    <div
        className={`${fluid ? styles.fluid : styles.container} ${className}`}
        {...props}
    >
        {children}
    </div>
);
GridBase.displayName = "Grid";

const Row: React.FC<RowProps> = ({
    children,
    className = "",
    gap = 1,
    ...props
}) => (
    <div
        className={`${styles.row} ${className}`}
        style={{ gap: `${gap}rem` }}
        {...props}
    >
        {children}
    </div>
);
Row.displayName = "Grid.Row";

const Col: React.FC<ColProps> = ({
    children,
    className = "",
    xs,
    sm,
    md,
    lg,
    xl,
    ...props
}) => {
    const responsiveClasses = [
        xs && styles[`col-xs-${xs}` as keyof typeof styles],
        sm && styles[`col-sm-${sm}` as keyof typeof styles],
        md && styles[`col-md-${md}` as keyof typeof styles],
        lg && styles[`col-lg-${lg}` as keyof typeof styles],
        xl && styles[`col-xl-${xl}` as keyof typeof styles],
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div
            className={`${styles.col} ${responsiveClasses} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
Col.displayName = "Grid.Col";

// ---------------------- Compound Type ----------------------
// 👇 This lets TS know Grid has static subcomponents
interface CompoundGrid extends React.FC<ContainerProps> {
    Row: typeof Row;
    Col: typeof Col;
}

// ---------------------- Combine and Export ----------------------
const Grid = GridBase as CompoundGrid;
Grid.Row = Row;
Grid.Col = Col;

export { Grid, Row, Col };
export default Grid;
