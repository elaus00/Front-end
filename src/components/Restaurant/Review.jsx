// import React from "react";
import styles from "./Restaurant.module.css"; // CSS 모듈 불러오기
import profilePic from "../assets/Icons/Review/div4.svg";
import star1 from "../assets/Icons/Review/Star1.svg";

function Review({ userName, date, content, timeAgo, rating }) {
  // Function to render the star icons based on the rating
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img key={i} className={styles.stars} src={star1} alt="Star" />
      );
    }
    return stars;
  };

  return (
    <div className={styles.reviewItem}>
      {/* Review item container */}
      <div className={styles.profile}>
        {/* Profile section */}
        <div className={styles.profilePic}>
          {/* Profile picture or user icon */}
          <img className={styles.userIcon} src={profilePic} alt="Profile" />
        </div>
        <div className={styles.starContainer}>{renderStars()}</div>
        {/* Display the user's name */}
        <div className={styles.nameContainer}>
          <div className={styles.userName}>{userName}</div>
        </div>
      </div>
      <div className={styles.contents}>
        {/* Review content section */}
        <div className={styles.dateInfo}>
          {/* Display the review date and time ago */}
          <div className={styles.date}>{date}</div>
          <div className={styles.ellipse2}></div>
          <div className={styles.dayBefore}>{timeAgo}</div>
        </div>
        <div className={styles.contentsContainer}>
          {/* Display the review content */}
          <div className={styles.reviewContents}>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Review;
