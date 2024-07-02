import React from "react";
import styles from "./Business.module.scss";

const Business = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.topBlur}></div>
      <div className={styles.missionArea}>
        <h1 className={styles.title}>Business</h1>

        <h2 className={styles.subTitle}>障がい者 <br />グループホーム事業</h2>
        <p className={styles.description}>
          障がい者グループホーム事業では、知的障がいや精神障がいを持つ方々が、
          <br />
          安心して自立した生活を送れるようサポートしています。
          <br />
          各ホームには24時間体制でスタッフが常駐し、日常生活の支援や健康管理、
          <br />
          社会参加のサポートを行っています。
          <br />
          <br />
          <strong>主なサービス内容</strong>
          <br />
          ・日常生活のサポート（食事、入浴、洗濯など）
          <br />
          ・医療機関や福祉サービスとの連携
          <br />
          ・就労支援や職業訓練のサポート
          <br />
          ・レクリエーション活動や社会参加イベントの企画
          <br />
          <br />
          私たちの目標は、利用者一人ひとりが自己実現を果たし、充実した生活を送ることです。{" "}
          <br />
          地域社会とのつながりを大切にし、利用者が地域での役割を持ち、 <br />
          積極的に社会に参加できるよう支援します。
        </p>
        <div className={styles.separator}></div>
        <div className={styles.subsidy}>
          <h2 className={styles.subTitle}>補助金事業</h2>
          <p className={styles.description}>
            補助金事業では、地域経済の活性化と雇用創出を目的に、 <br />
            中小企業やスタートアップに対する経済的支援を行っています。 <br />
            私たちは、多様な補助金プログラムを提供しており、各企業のニーズに応じたサポートを提供します。
            <br />
            <br />
            <strong>主なプログラム</strong>
            <br />
            ・新規事業開発補助金：新しいビジネスアイディアやプロジェクトの立ち上げを支援
            <br />
            ・設備投資補助金：生産性向上や効率化を目的とした設備投資を支援
            <br />
            ・人材育成補助金：社員のスキルアップや研修プログラムの実施を支援
            <br />
            <br />
            各プログラムの詳細や申請手続きについては、専門のスタッフが丁寧にサポートいたします。{" "}
            <br />
            申請書の作成や必要書類の準備、面談の調整など、 <br />
            企業が円滑に補助金を受け取るためのサポートを提供します。 <br />
            興味のある方は、ぜひお問い合わせください。
          </p>
        </div>
      </div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Business;
