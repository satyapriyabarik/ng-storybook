import React from "react";
import styles from "./InputGroup.module.css";

export const InputGroup = ({ children }) => (
    <div className={styles.inputGroup}>{children}</div>
);

export const InputGroupPrepend = ({ children }) => (
    <div className={styles.inputGroupPrepend}>{children}</div>
);

export const InputGroupAppend = ({ children }) => (
    <div className={styles.inputGroupAppend}>{children}</div>
);

export const Input = ({ ...props }) => (
    <input className={styles.input} {...props} />
);
