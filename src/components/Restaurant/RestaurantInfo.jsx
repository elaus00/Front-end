import styles from "./Restaurant.module.css";
import star0 from "../assets/Icons/Review/star0.svg";
import iconPhoneTelephone0 from "../assets/Icons/Review/icon-phone-telephone0.svg";
import { useEffect } from "react";

// Component to display restaurant information
function RestaurantInfo({ RestInfo, closeModal }) {
  return (
    <div className={styles.restInfo}>
      {/* Container for restaurant picture */}
      <div className={styles.restPicture}>
        <img
          className={styles.RestarauntPicFrame}
          src={`https://raw.githubusercontent.com/Pure-Plate/DB-Photo/main/images/${RestInfo.id}.jpg`}
          alt="Restaurant"
        />
      </div>
      <div className={styles.restDescription}>
      {/* Container for restaurant description */}
      <button onClick={closeModal} className={styles.closeButton}></button>
        {/* Restaurant name */}
        <div className={styles.restName}>{RestInfo.name}</div>
        {/* Container for rating and reviews */}
        <div className={styles.rateContainer}>
          {/* Container for star rating */}
          <div className={styles.rateStar}>
            <img className={styles.star} src={star0} alt="Star" />
            <div className={styles.rate}>{RestInfo.rating}</div>
          </div>
          <div className={styles.bar}></div>
          {/* Container for review count */}
          <div className={styles.rateReview}>
            <div className={styles.reviewNum}>{RestInfo.reviewcount}</div>
            <div className={styles.reviews}>Reviews</div>
          </div>
        </div>
        {/* Restaurant address */}
        <div className={styles.restAddress}>{RestInfo.address}</div>
        {/* Container for phone number */}
        <div className={styles.call}>
          <img
            className={styles.iconPhoneTelephone}
            src={iconPhoneTelephone0}
            alt="Phone"
          />
          <div className={styles.restPhoneNum}>{RestInfo.phone}</div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfo; // Export the component
