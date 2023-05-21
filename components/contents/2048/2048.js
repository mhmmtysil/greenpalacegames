import styles from "./2048.module.scss";
import React, { useEffect, useState } from "react";

const Game2048 = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 900) {
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
      <h1 className={styles.h1}>2048</h1>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <img className={styles.img} src="/2048.png" alt="2048" />
          <div className={styles.rowContainer}>
            <h2 className={styles.h2}>
              Kelimelerin İmparatoru olmaya hazır mısın? Bölümlerde verilen
              harflerle ne kadar kelime türetebilirsin? Tek yapman gereken
              verilen harfler üzerinde parmağını gezdirerek kelimeleri bulmaya
              çalışmak.
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
