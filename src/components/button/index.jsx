import React from "react";
import { ReactComponent as Arrow } from "../../img/icon-arrow-r.svg";
import styles from "./button.module.scss";
export const Button = ({ children, textButtons, className, onClick }) => {
  return (
    <button type="button" onClick={onClick}
      className={`${styles.button} ${textButtons ? styles.text : ""} ${
        className ? className : ""
      }`}
    >
      {children}
      {!textButtons && (
        <span className={styles.icon}>
          <Arrow />
        </span>
      )}
    </button>
  );
};
