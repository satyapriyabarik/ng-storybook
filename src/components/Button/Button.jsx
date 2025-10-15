import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, variant = "primary", size = "md", ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`} {...props}>
      {children}
    </button>
  );
};
