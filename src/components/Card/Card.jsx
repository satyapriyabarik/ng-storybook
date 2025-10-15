import React from "react";
import styles from "./Card.module.css";

export const Card = ({ children, className = "" }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className = "" }) => {
  return <div className={`${styles.cardHeader} ${className}`}>{children}</div>;
};

export const CardBody = ({ children, className = "" }) => {
  return <div className={`${styles.cardBody} ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className = "" }) => {
  return <div className={`${styles.cardFooter} ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className = "" }) => {
  return <h5 className={`${styles.cardTitle} ${className}`}>{children}</h5>;
};

export const CardText = ({ children, className = "" }) => {
  return <p className={`${styles.cardText} ${className}`}>{children}</p>;
};
