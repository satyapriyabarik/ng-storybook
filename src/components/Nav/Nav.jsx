import React from "react";
import styles from "./Nav.module.css";

export const Nav = ({ children, vertical }) => {
    return (
        <ul className={`${styles.nav} ${vertical ? styles.navVertical : ""}`}>
            {children}
        </ul>
    );
};

export const NavItem = ({ href, children, active }) => (
    <li className={styles.navItem}>
        <a href={href} className={`${styles.navLink} ${active ? styles.active : ""}`}>
            {children}
        </a>
    </li>
);
