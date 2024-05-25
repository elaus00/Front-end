import styles from "./Restaurant.module.css"; // CSS 모듈 불러오기
import rectangle1850 from "./review/rectangle-1850.png";
import star0 from "./review/star0.svg";
import iconPhoneTelephone0 from "./review/icon-phone-telephone0.svg";

function RestaurantInfo() {
  return (
    <div className={styles.restInfo}>
      <div className={styles.restPicture}>
        <img
          className={styles.rectangle185}
          src={rectangle1850}
          alt="Restaurant"
        />
      </div>
      <div className={styles.restDescription}>
        <div className={styles.div3}>잘 빠진 메밀</div>
        <div className={styles.rate}>
          <div className={styles.rateStar}>
            <img className={styles.star} src={star0} alt="Star" />
            <div className={styles._4_5}>4.5</div>
          </div>
          <div className={styles.bar}></div>
          <div className={styles.rateReview}>
            <div className={styles._48}>48</div>
            <div className={styles.reviews}>Reviews</div>
          </div>
        </div>
        <div className={styles._11_4}>서울특별시 종로구 자하문로11길 4</div>
        <div className={styles.call}>
          <img
            className={styles.iconPhoneTelephone}
            src={iconPhoneTelephone0}
            alt="Phone"
          />
          <div className={styles._070_4142_1214}>070-4142-1214</div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfo;
