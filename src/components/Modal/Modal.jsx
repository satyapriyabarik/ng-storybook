import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, title, children, footer }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {title && (
                    <div className={styles.header}>
                        <h3>{title}</h3>
                        <button className={styles.closeBtn} onClick={onClose}>✖</button>
                    </div>
                )}
                <div className={styles.body}>{children}</div>
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>
    );
};

export default Modal;
