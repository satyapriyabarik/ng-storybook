import React from "react";
import styles from "./Form.module.css";

export const FormGroup = ({ label, htmlFor, children }) => (
    <div className={styles.formGroup}>
        {label && <label htmlFor={htmlFor} className={styles.label}>{label}</label>}
        {children}
    </div>
);

export const Input = ({ id, type = "text", ...props }) => (
    <input id={id} type={type} className={styles.input} {...props} />
);

export const TextArea = ({ id, ...props }) => (
    <textarea id={id} className={styles.textarea} {...props}></textarea>
);

export const Button = ({ children, ...props }) => (
    <button className={styles.button} {...props}>{children}</button>
);

export const Form = ({ children, onSubmit }) => (
    <form onSubmit={onSubmit}>{children}</form>
);
