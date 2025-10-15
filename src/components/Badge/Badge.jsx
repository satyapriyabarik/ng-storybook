import React from "react";
import styles from "./Badge.module.css";

export const Badge = ({ children, variant = "primary" }) => {
    const className = `${styles.badge} ${styles[variant] || styles.primary}`;
    return <span className={className}>{children}</span>;
};
