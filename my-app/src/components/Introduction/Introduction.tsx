import React from "react";
import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.topBlur}></div>
      <div className={styles.missionArea}>
        <h1 className={styles.title}>Company</h1>
        <h2 className={styles.subTitle}>MISSION</h2>
        <p className={styles.description}>
          目の前の1人が抱える課題を見つけ、
          <br />
          深く本質を問い続ける。
          <br />
          改善ではなく、根本的な解決のために
          <br />
          社会構造を変えるほどの市場インパクトをもたらす。
          <br />
          半径1mにあるイシューと、巨大なマーケット。
          <br />
          その交差する点にプロダクトを創り出し、
          <br />
          社会に非連続な成長≒10xを届けていく。
          <br />
        </p>
      </div>
      <div className={styles.memberArea}>
        <h2 className={styles.subTitle}>LEADERSHIP</h2>
        <div className={styles.leadershipContent}>
          <div className={styles.photoContainer}>
            <img
              src="/assets/leadership_picture.jpg"
              alt="代表の写真"
              className={styles.photo}
            />
            <div className={styles.bio}>
              <p className={styles.name}>坂口　亮太</p>
              <p className={styles.position}>CEO</p>
              <p className={styles.career}>代表者の簡単な経歴</p>
            </div>
          </div>
          <p className={styles.message}>
            私たちの施設は、障害を持つ方々が安心して暮らせる場所を提供することを目指しています。
            <br />
            社会の一員として、すべての人が尊重され、可能性を最大限に発揮できる環境を整えることが私たちの使命です。
            <br />
            一人ひとりが自立し、豊かな生活を送るためのサポートを惜しみません。
            <br />
            これからも、障害者の方々とその家族が笑顔でいられる社会の実現に向けて、誠心誠意努力してまいります。
            私たちの施設は、障害を持つ方々が安心して暮らせる場所を提供することを目指しています。
            <br />
            社会の一員として、すべての人が尊重され、可能性を最大限に発揮できる環境を整えることが私たちの使命です。
            <br />
            一人ひとりが自立し、豊かな生活を送るためのサポートを惜しみません。
            <br />
            これからも、障害者の方々とその家族が笑顔でいられる社会の実現に向けて、誠心誠意努力してまいります。
          </p>
        </div>
      </div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Introduction;
