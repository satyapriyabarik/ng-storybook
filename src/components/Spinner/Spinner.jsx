import React from "react";
import styles from "./Spinner.module.css";

export const Spinner = ({ size = "2rem", centered = false }) => {
    const spinnerStyle = { width: size, height: size };
    return centered ? (
        <div className={styles.textCenter}>
            <div className={styles.spinner} style={spinnerStyle}></div>
        </div>
    ) : (
        <div className={styles.spinner} style={spinnerStyle}></div>
    );
};
