import React from "react";
import styles from "./Container.module.css";

export const Container = ({ children, size = "md", fluid = false, className = "" }) => {
    const sizeClass = fluid ? styles.fluid : styles[size] || styles.md;
    return <div className={`${styles.container} ${sizeClass} ${className}`}>{children}</div>;
};
