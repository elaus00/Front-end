// import React from "react";
import axios from "axios";
import styles from "./Restaurant.module.css"; // CSS 모듈 불러오기
import RestaurantInfo from "./RestaurantInfo";
import Review from "./Review";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import bookmark from "../assets/bookmark.svg";

function Restaurant({ id, closeModal }) {
  const { isLoggedIn, login, logout, user } = useAuth();

  let restId = null;
  if (id != 0) {
    restId = id;
  }

  const [reviews, setReviews] = useState([]);

  // const addReview = (newReview) => {
  //   setReviews([...reviews, newReview]);
  // };

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

  const RestOn = async (restId) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/restaurant/list"
      );
      response.data.data.forEach((element) => {
        if (element.Id == restId) {
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
        }
      });
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

  const ReviewOn = async (name) => {
    try {
      console.log(name);
      const response = await axios.get(
        `http://127.0.0.1:8000/api/review/view?name=${name}`
      );

      setReviews(response.data.reviews);
      // console.log(reviews);
      const reviewData = response.data.reviews[0];

      // SetReviewInfo((prevState) => ({
      //   ...prevState,
      //   review_id: reviewData.review_id,
      //   user_id: reviewData.user_id,
      //   user_name: reviewData.user_name,
      //   rating: reviewData.rating,
      //   review_text: reviewData.review_text,
      //   visit_date: reviewData.visit_date,
      // }));
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

  useEffect(() => {
    if (id != 0) {
      RestOn(restId);
    }
  }, []);
  useEffect(() => {
    if (RestInfo.name !== "") {
      ReviewOn(RestInfo.name);
    }
  }, [RestInfo.name]); // RestInfo.name이 변경될 때마다 ReviewOn 함수를 호출

  if (id != 0) {
    return (
      // <div className={styles.RestaurantContainer}>
      <>
        {/* <div className={styles.container} style={{}}> */}
        <div className={styles.container}>
          <div className={styles.header}>
            <RestaurantInfo RestInfo={RestInfo} />
            <button style={{ border: "solid 2px " }}>hello</button>
          </div>
          <div className={styles.body}>
            <div className={styles.review}>
              <div className={styles.review2}>Review</div>
              <div className={styles.line1}></div>
            </div>{" "}
            <div className={styles.reviewContainer}>
              {reviews.map((ReviewInfo) => (
                <Review
                  key={ReviewInfo.review_id} // 고유한 key 프로퍼티 추가
                  userName={ReviewInfo.user_name}
                  date={ReviewInfo.visit_date}
                  content={ReviewInfo.review_text}
                  rating={ReviewInfo.rating}
                  timeAgo={timeAgo}
                />
              ))}
            </div>
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
}

export default Restaurant;
