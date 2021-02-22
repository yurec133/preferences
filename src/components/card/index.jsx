import React from "react";
import styles from "./card.module.scss";

export const Card = ({ children, className}) => {
  return (
    <div className={`${className ? className : ''} ${styles.card}`}>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
