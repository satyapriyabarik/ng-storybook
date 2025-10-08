import React from 'react';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', size = 'md', children, ...rest }) => {
  const classNames = [styles.button, styles[variant], styles[size]].filter(Boolean).join(' ');
  return <button className={classNames} {...rest}>{children}</button>;
};

export default Button;