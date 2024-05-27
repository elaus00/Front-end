// import React from "react";
import axios from "axios";
import styles from "./Restaurant.module.css"; // CSS 모듈 불러오기
import RestaurantInfo from "./RestaurantInfo";
import Review from "./Review";

function Restaurant({ id, closeModal }) {
  const on = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/restaurant/list"
      );

      let a = [];
      response.data.data.forEach((element) => {
        console.log(element);
      });

      // console.log(response.data.data[0]);
    } catch (error) {
      if (error.response) {
        // 서버가 응답을 반환했으나 상태 코드가 2xx 범위를 벗어났을 때
        console.error(
          "서버 응답 오류:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        // 요청이 만들어졌으나 응답을 받지 못했을 때
        console.error(
          "서버로부터 응답이 없습니다. 네트워크 문제일 수 있습니다.",
          error.request
        );
      } else {
        // 요청 설정 중에 오류가 발생했을 때
        console.error("요청 설정 중 오류가 발생했습니다:", error.message);
      }
    }
  };

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
