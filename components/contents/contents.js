import styles from "./content.module.scss";
import Button from "../button/button";
import React, { useEffect, useState } from "react";

const Contents = () => {
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
        <h1 className={styles.h1}>Roulette Casino Royale</h1>
        <div className={styles.contentContainer}>
          <img className={styles.img} src="/kelime.png" alt="AboutUs" />
          <h2 className={styles.h2}>
            Bu şekilde, buton scroll ile görünür hale geldiğinde animasyon
            başlar. İlk olarak arkaplanı tamamen boş bir daire şeklinde
            görüntülenir, ardından 1 saniye süresince border yolunu takip ederek
            çevresi dolu hale gelir ve içi tamamen dolu şekilde görüntülenir.
            Animasyon süresini ve renkleri ihtiyaçlarınıza göre
            özelleştirebilirsiniz.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contents;
