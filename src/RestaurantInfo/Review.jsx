// import React from "react";
import styles from "./Restaurant.module.css"; // CSS 모듈 불러오기
import profilePic from "./review/div4.svg";
import div6 from "./review/div6.svg";

function Review({ userName, date, content }) {
  return (
    <div className={styles.div5}>
      <div className={styles.profile}>
        <div className={styles.profilePic}>
          {/* 프로필 사진 또는 사용자 아이콘 */}
          <img className={styles.div6} src={profilePic} alt="Profile" />
        </div>
        <div className={styles.div7}>
          <img className={styles.div8} src={div6} />
        </div>
        <div className={styles.div9}>
          <div className={styles.userName}>{userName}</div>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.div10}>
          <div className={styles.date}>{date}</div>
          <div className={styles.ellipse2}></div>
          <div className={styles.div11}>하루 전</div>
        </div>
        <div className={styles.div12}>
          <div className={styles.div13}>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Review;
