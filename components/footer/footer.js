import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <button>
          <img src="/aboutus.png" alt="AboutUs" />
          <span>Hakkımızda</span>
        </button>
        <Link href="/privacypolicy">
          <button>
            <img src="/privacypolicy.png" alt="privacypolicy" />
            <span>Gizlilik Politikası</span>
          </button>
        </Link>
        <button>
          <img src="/faq.png" alt="FAQ" />
          <span>Sıkça Sorulan Sorular</span>
        </button>
        <button>
          <img src="/contact.png" alt="FAQ" />
          <span>İletişim</span>
        </button>
      </div>
      <p className={styles.p}>© 2023 Green Palace Games</p>
    </footer>
  );
};

export default Footer;
