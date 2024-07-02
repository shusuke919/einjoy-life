import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {


  return (
    <section className={styles.introduction}>
      <div className={styles.topBlur}></div>
      <div className={styles.missionArea}>
        <h1 className={styles.title}>Contact</h1>
        <h2 className={styles.subTitle}>お問い合わせフォーム</h2>
        <p className={styles.description}>
        ご質問やご意見がございましたら、以下のフォームよりお気軽にお問い合わせください。<br />
          お客様からのお問い合わせには、できるだけ早く対応させていただきます。
        </p>

        <div className={styles.buttonContainer}>
          <a href="tel:+1234567890" className={styles.button}>
            電話でのお問い合わせ
          </a>
          <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer" className={styles.button}>
            メールでのお問い合わせ
          </a>
        </div>
      </div>
    
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Contact;
