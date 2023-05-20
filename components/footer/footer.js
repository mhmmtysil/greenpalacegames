import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <button>
          <img src="/aboutus.png" alt="AboutUs" />
          <span>Hakkımızda</span>
        </button>
        <button>
          <img src="/privacypolicy.png" alt="privacypolicy" />
          <span>Gizlilik Politikası</span>
        </button>
        <button>
          <img src="/faq.png" alt="FAQ" />
          <span>Sıkça Sorulan Sorular</span>
        </button>
        <button>
          <img src="/contact.png" alt="FAQ" />
          <span>İletişim</span>
        </button>
      </div>
      <p className={styles.p}>Telif Hakkı © 2023 Web Sitenizin Adı</p>
    </footer>
  );
};

export default Footer;
