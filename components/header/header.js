import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Green Palace Games</h1>
      </div>

      <div className={styles.buttons}>
        <Link href="/">
          <button>
            <img src="/Home.png" alt="Ana Sayfa" />
            <span>Ana Sayfa</span>
          </button>
        </Link>
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
