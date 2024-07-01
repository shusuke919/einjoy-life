import React from "react";
import styles from "./MainLogo.module.scss";

const MainLogo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src="/assets/mainLogo.png" alt="ロゴ" />
      </div>
    </div>
  );
};

export default MainLogo;
