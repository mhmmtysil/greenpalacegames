import styles from "./rouletteroyale.module.scss";
import React, { useEffect, useState } from "react";

const WordEmperor = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
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
            src="/roulette/rouletteleft.png"
            alt="kelimeimparatoru"
          />
          <div className={styles.rowContainer}>
            <h1 className={styles.h1}>Roulette Casino Royale</h1>
            <h2 className={styles.h2}>
              Gerçek oyuncularla beraber oynayabileceğin sıra dışı 3 Boyutlu bir
              Rulet deneyimine hazır mısın? Hemen kaydol ve heyecanı kaçırma!
            </h2>
            <img className={styles.storeImg} src="/appstoredown.png"></img>
            <img className={styles.storeImg} src="/playstoredown.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordEmperor;
