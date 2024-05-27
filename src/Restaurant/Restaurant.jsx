// import React from "react";
import axios from "axios";
import styles from "./Restaurant.module.css"; // CSS 모듈 불러오기
import RestaurantInfo from "./RestaurantInfo";
import Review from "./Review";
import { useEffect, useState } from "react";

function Restaurant({ id, closeModal, none }) {
  const [RestInfo, SetRestInfo] = useState({
    id: "",
    name: "",
    rating: "",
    reviewcount: "",
    address: "",
    phone: "",
    photo: "",
  });
  const [ReviewInfo, SetReviewInfo] = useState({
    review_id: 0,
    user_id: 0,
    user_name: "",
    rating: 0,
    review_text: "",
    visit_date: "2024-05-26T00:00:00Z",
  });

  // 며칠전 계산
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const reviewDate = new Date(ReviewInfo.visit_date);
      const now = new Date();
      const diffTime = Math.abs(now - reviewDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      setTimeAgo(`${diffDays}일 ${diffHours}시간 전`);
    };

    calculateTimeAgo();
  }, [ReviewInfo.visit_date]);
  //

  const RestOn = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/restaurant/list"
      );

      // console.log(response.data);

      response.data.data.forEach((element) => {
        if (element.Id === 5) {
          SetRestInfo((prevState) => ({
            ...prevState,
            id: element.Id,
            name: element.Name,
            rating: parseFloat(element.Rating).toFixed(1),
            reviewcount: element.ReviewCount,
            address: element.Address,
            phone: element.Phone,
            photo: element.Photo,
          }));
          // console.log(element);
        }
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

  // useEffect(() => {
  //   console.log(RestInfo);
  // }, [RestInfo]);

  useEffect(() => {
    RestOn();
    SetReviewInfo((prevState) => ({
      review_id: 1,
      user_id: 1,
      user_name: "sayeon",
      rating: 3,
      review_text: "I love you",
      visit_date: "2024-05-26T00:00:00Z",
    }));
  }, []);

  // const ReviewOn = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://127.0.0.1:8000/api/review/view?name=example"
  //     );

  //     console.log(response.data);

  //     SetRestInfo((prevState) => ({
  //       ...prevState,
  //       review_id: response.data.review_id,
  //       user_id: response.data.user_id,
  //       user_name: response.data.user_name,
  //       rating: response.data.rating,
  //       review_text: response.data.review_text,
  //       visit_date: response.data.visit_date,
  //     }));
  //     // console.log(element);

  //     // console.log(response.data.data[0]);
  //   } catch (error) {
  //     if (error.response) {
  //       // 서버가 응답을 반환했으나 상태 코드가 2xx 범위를 벗어났을 때
  //       console.error(
  //         "서버 응답 오류:",
  //         error.response.status,
  //         error.response.data
  //       );
  //     } else if (error.request) {
  //       // 요청이 만들어졌으나 응답을 받지 못했을 때
  //       console.error(
  //         "서버로부터 응답이 없습니다. 네트워크 문제일 수 있습니다.",
  //         error.request
  //       );
  //     } else {
  //       // 요청 설정 중에 오류가 발생했을 때
  //       console.error("요청 설정 중 오류가 발생했습니다:", error.message);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   ReviewOn();
  // }, []);

  return (
    // <div className={styles.RestaurantContainer}>
    <>
      {/* <div className={styles.container} style={{}}> */}
      <div className={styles.container} style={{ display: `${none}` }}>
        <div className={styles.header}>
          <RestaurantInfo RestInfo={RestInfo} />
        </div>
        <div className={styles.body}>
          <div className={styles.review}>
            <div className={styles.review2}>Review</div>
            <div className={styles.line1}></div>
          </div>
          <Review
            userName={ReviewInfo.user_name}
            date={ReviewInfo.visit_date}
            content={ReviewInfo.review_text}
            rating={ReviewInfo.rating}
            timeAgo={timeAgo}
          />
          <Review
            userName={ReviewInfo.user_name}
            date={ReviewInfo.visit_date}
            content={ReviewInfo.review_text}
            rating={ReviewInfo.rating}
            timeAgo={timeAgo}
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

// id={RestInfo.id}
// name={RestInfo.name}
// rating={RestInfo.rating}
// reviewCount={RestInfo.reviewcount}
// address={RestInfo.address}
// phone={RestInfo.phone}
// photo={RestInfo.photo}
