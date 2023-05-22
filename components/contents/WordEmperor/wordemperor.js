import styles from "./wordemperor.module.scss";
import React, { useEffect, useState } from "react";

const WordEmperor = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
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
            src="/kelime/kelimesol.png"
            alt="kelimeimparatoru"
          />
          <div className={styles.rowContainer}>
            <h1 className={styles.h1}>Kelime İmparatoru</h1>
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

export default WordEmperor;
