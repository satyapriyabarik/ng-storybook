import React from "react";
import styles from "./ListGroup.module.css";

export const ListGroup = ({ children }) => {
    return <ul className={styles.listGroup}>{children}</ul>;
};

export const ListGroupItem = ({ children, active = false, onClick }) => {
    const className = active
        ? `${styles.listGroupItem} ${styles.listGroupItemActive}`
        : styles.listGroupItem;

    return (
        <li className={className} onClick={onClick}>
            {children}
        </li>
    );
};
