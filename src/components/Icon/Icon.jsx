import React from 'react';
import styles from './Icon.module.css';
import { icons } from './icons'; // auto-generated file

const Icon = ({ name, size = '24px', color = 'currentColor', ...props }) => {
    const SvgIcon = icons[name];
    if (!SvgIcon) return null;

    return (
        <SvgIcon
            className={styles.icon}
            style={{ width: size, height: size, fill: color }}
            aria-label={name}
            {...props}
        />
    );
};

export default Icon;
