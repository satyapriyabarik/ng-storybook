import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

export const Dropdown = ({ title, items = [] }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <button
                className={styles.toggleButton}
                onClick={() => setOpen((prev) => !prev)}
            >
                {title}
            </button>

            <div className={`${styles.menu} ${open ? styles.show : ""}`}>
                {items.map((item, idx) =>
                    item.divider ? (
                        <div key={idx} className={styles.divider}></div>
                    ) : (
                        <div
                            key={idx}
                            className={styles.menuItem}
                            onClick={item.onClick || (() => { })}
                        >
                            {item.label}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
