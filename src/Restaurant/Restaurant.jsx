// import React from "react";
import styles from "./Restaurant.module.css"; // CSS 모듈 불러오기
import RestaurantInfo from "./RestaurantInfo";
import Review from "./Review";

function Restaurant({ id, closeModal }) {
  return (
    // <div className={styles.RestaurantContainer}>
    <>
      {/* <div className={styles.container} style={{}}> */}
      <div className={styles.container}>
        <div className={styles.header}>
          <RestaurantInfo />
        </div>
        <div className={styles.body}>
          <div className={styles.review}>
            <div className={styles.review2}>Review</div>
            <div className={styles.line1}></div>
          </div>
          <Review
            userName="Saeyeon"
            date="23.05.24"
            content="리뷰는 여기에 들어갑니다 하하"
          />
          <Review
            userName="User_name"
            date="23.05.24"
            content="리뷰는 여기에 들어갑니다 하하"
          />
        </div>
        <button onClick={closeModal} className={styles.closeButton}>
          Close
        </button>
      </div>
      {/* </div> */}
    </>
    // </div>
  );
}

export default Restaurant;
