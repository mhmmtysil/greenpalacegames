import React from "react";
import Layout from "../../../components/layout";
import styles from "./privacypolicy.module.scss";

const PrivacyPolicy = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <h1 className={styles.h1}>Gizlilik Sözleşmesi</h1>
          <div className={styles.content}>
            Bu Gizlilik Sözleşmesi zaman zaman güncellenebilir. Sözleşme
            üzerindeki değişiklikleri bildirmek için Sitemizi ziyaret
            ettiğinizde güncellenmiş bir sürümü yayınlayacağız. Değişiklikler
            geçerli tarihinden itibaren etkili olacaktır.
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
