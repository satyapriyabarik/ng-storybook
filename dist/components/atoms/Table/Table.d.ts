import React from "react";
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    bordered?: boolean;
    hover?: boolean;
    striped?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "light" | "dark";
    responsive?: "sm" | "md" | "lg" | "xl" | "xxl" | boolean;
    className?: string;
    children: React.ReactNode;
}
export declare const Table: React.FC<TableProps>;
export default Table;
