import { useState } from "react";
import styles from "./faq.module.scss";
import Layout from "../../../components/layout";

const Sorular = [
  {
    soru: "Yayınladığınız oyunlar ücretsiz mi?",
    cevap: "Cevap 1",
  },
  {
    soru: "Soru 2",
    cevap: "Cevap 2",
  },
];

export default function FAQ() {
  const [acikSoruIndex, setAcikSoruIndex] = useState(null);

  const soruyaTikla = (index) => {
    if (acikSoruIndex === index) {
      // Eğer tıklanan soru zaten açıksa, kapat
      setAcikSoruIndex(null);
    } else {
      // Değilse, tıklanan soruyu aç
      setAcikSoruIndex(index);
    }
  };

  return (
    <Layout>
      <div className={styles.mainContainer}>
        {Sorular.map((soru, index) => (
          <div className={styles.itemParent} key={index}>
            <div
              className={styles.container}
              onClick={() => soruyaTikla(index)}
            >
              <h3 className={styles.question}>{soru.soru}</h3>
              <div className={styles.iconContainer}>
                <img
                  className={`${styles.icon} ${
                    acikSoruIndex === index ? styles.rotated : ""
                  }`}
                  src="/arrow.png"
                ></img>
              </div>
            </div>
            {acikSoruIndex === index && (
              <div className={styles.answerContainer}>
                <p>{soru.cevap}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
