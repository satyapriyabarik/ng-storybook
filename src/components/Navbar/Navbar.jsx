import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = ({ brand, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen((prev) => !prev);

    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.navbarBrand}>
                {brand}
            </a>
            <button
                className={styles.navbarToggler}
                onClick={toggleNav}
                aria-label="Toggle navigation"
            >
                ☰
            </button>
            <ul className={`${styles.navbarNav} ${isOpen ? styles.show : ""}`}>
                {children}
            </ul>
        </nav>
    );
};

export const NavItem = ({ href, children }) => (
    <li className={styles.navItem}>
        <a href={href} className={styles.navLink}>
            {children}
        </a>
    </li>
);
