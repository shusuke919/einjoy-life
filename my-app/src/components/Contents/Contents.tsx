import React from "react";
import styles from "./Contents.module.scss";

const Contents = () => {
  const facilities = [
    {
      name: "ピースⅠ",
      photo: "/assets/yao_1.jpg",
      message: "八尾市店の説明文がここに入ります。",
      address:"大阪府八尾市中田1-3 友田コーポ141",
    },
    {
      name: "ピースⅡ",
      photo: "/assets/yao_1.jpg",
      message: "大阪市店の説明文がここに入ります。",
      address:"大阪府八尾市美園3-78-1 ピアパーク美園401 402",
    },
  ];

  return (
    <section className={styles.introduction}>
      <div className={styles.topBlur}></div>
      <div className={styles.missionArea}>
        <h1 className={styles.title}>Facility</h1>
        <h2 className={styles.subTitle}>マンション型<br />障がい者グループホーム</h2>
        <p className={styles.description}>
          当社が運営するマンション型障がい者グループホームは、 <br />
          障がいを持つ方々が快適に過ごせる住環境を提供するために設計されています。
          <br />
          一人ひとりのニーズに応じた支援を行い、日常生活の自立を促進します。
          <br />
          各居室はプライバシーを確保しながらも、共用スペースでは他の入居者との交流を
          <br />
          楽しめるよう工夫されています。
          <br />
          スタッフは24時間体制でサポートを行い、緊急時にも迅速に対応できる体制を整えています。
          <br />
          近隣には商業施設や公共交通機関が充実しており、利便性も高く、 <br />
          入居者の社会参加を積極的に支援します。
          <br />
          私たちは、障がいを持つ方々が地域社会の中で安心して暮らせる環境を提供し、
          <br />
          彼らが自己実現できる場を作り続けていきます。
        </p>
      </div>
      <div className={styles.officeArea}>
        {facilities.map((facility, index) => {
          return (
            <div key={index} className={styles.officeContent}>
            
              <div className={styles.photoContainer}>
                <img
                  src={facility.photo}
                  alt={`${facility.name}の写真`}
                  className={styles.photo}
                />
              </div>
              <p className={styles.officeName}>{facility.name}</p>
             
              <p className={styles.address}>{facility.address}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Contents;
