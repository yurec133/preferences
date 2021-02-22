import React from "react";
import styles from "./cardBox.module.scss";

export const CardBox = () => {
  return (
    <div className={styles.cardBox}>
      <div className={styles.header}>Personal Intelligent Assistant</div>
      <div className={styles.body}>
        <div className={styles.scroll}>
          <div className="text-small margin-small-bottom">Best practices</div>
          <div className="text-large margin-small-bottom">
            Matching preferences
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          </p>
          <div className="text-large margin-small-bottom">
            Matching criteria:
          </div>
          <ul className="list">
            <li>Industries</li>
            <li>Investor</li>
            <li>Type and position</li>
            <li>Advanced options</li>
            <li>Ideal portrait</li>
          </ul>
          <div className="text-large margin-small-bottom">Further reading:</div>
          <ul className="list">
            <li>
              <span className="link">Knowledge base: article #1</span>
            </li>
            <li>
              <span className="link">Knowledge base: article #2</span>
            </li>
            <li>
              <span className="link">Knowledge base: article #3</span>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          </p>
        </div>
      </div>
    </div>
  );
};
