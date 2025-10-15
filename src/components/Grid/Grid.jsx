import React from "react";
import styles from "./Grid.module.css";

// Container
export const Container = ({ children, className = "" }) => {
    return <div className={`${styles.container} ${className}`}>{children}</div>;
};

// Row
export const Row = ({ children, className = "" }) => {
    return <div className={`${styles.row} ${className}`}>{children}</div>;
};

// Col
export const Col = ({ children, size, className = "" }) => {
    const colClass = size ? styles[`col-${size}`] : styles.col;
    return <div className={`${styles.col} ${colClass} ${className}`}>{children}</div>;
};
