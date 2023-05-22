import styles from "./2048.module.scss";
import React, { useEffect, useState } from "react";

const Game2048 = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 700) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${styles.mainContainer} ${visible ? styles.visible : ""}`}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <img
            className={styles.img}
            src="/2048/2048left.png"
            alt="kelimeimparatoru"
          />
          <div className={styles.rowContainer}>
            <h1 className={styles.h1}>2048</h1>
            <h2 className={styles.h2}>
              Klasikleşmiş 2048 deneyimine hazır mısın?
            </h2>
            <img className={styles.storeImg} src="/appstoredown.png"></img>
            <img className={styles.storeImg} src="/playstoredown.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game2048;
