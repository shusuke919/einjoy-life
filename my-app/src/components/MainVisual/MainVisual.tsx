import React from "react";
import styles from "./MainVisual.module.scss";

const MainVisual = () => {
  return (
    <div className={styles["main-visual"]}>
      <video
        className={styles["background-video"]}
        playsInline
        muted={true}
        autoPlay={true}
        loop={true}
      >
        <source src="/assets/video/Rst.mp4" type="video/mp4" />
      </video>
      {/* 他のコンテンツがあればここに追加 */}
    </div>
  );
};

// const MainVisualInner = () => {
//   return (
//     <div className={styles['main-visual-content']}>
//       <h2>カラフルでちょっと未来を創造する</h2>
//       <p>DXをもっと身近に</p>
//       <button>
//         <a href={"#portfolio"}>Works →</a>
//       </button>
//     </div>
//   );
// };

export default MainVisual;
