import React from "react";
import styles from "./main.module.scss";

const Main = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftColumn}>
        <img src="/stars.png" alt="stars" className={styles.stars} />
        <h2 className={styles.h2}>5 Yıldızlı Eğlence</h2>
      </div>
      <div className={styles.rightColumn}>
        <img src="/PhoneVisual.png" alt="Resim 2" />
      </div>
    </div>
  );
};

export default Main;
