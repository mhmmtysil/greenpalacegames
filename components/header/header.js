import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Green Palace Games</h1>
      </div>
      <div className={styles.buttons}>
        <button>
          <img src="/Home.png" alt="Ana Sayfa" />
          <span>Ana Sayfa</span>
        </button>
        <button>
          <span>Oyunlarımız</span>
        </button>
        <button>
          <span>İletişim</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
