import axios from "axios";
import styles from "./Restaurant.module.css";
import RestaurantInfo from "./RestaurantInfo";
import Review from "./Review";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import bookmarkIconGray from "../assets/Icons/Bookmark/bookmarkGray.svg";
import bookmarkIconYellow from "../assets/Icons/Bookmark/bookmarkYellow.svg";

function Restaurant({ id, closeModal }) {
  const { isLoggedIn, userToken, bookmarks, bookmarkGet, URL } = useAuth();

  let restId = null;
  if (id != 0) {
    restId = id; // Assign the passed id to restId if it's not 0
  }

  // State to hold reviews
  const [reviews, setReviews] = useState([]);

  // State to hold restaurant information
  const [RestInfo, SetRestInfo] = useState({
    id: "",
    name: "",
    rating: "",
    reviewcount: "",
    address: "",
    phone: "",
    photo: "",
  });

  // State to hold a single review information
  const [ReviewInfo, SetReviewInfo] = useState({
    review_id: 0,
    user_id: 0,
    user_name: "",
    rating: 0,
    review_text: "",
    visit_date: "2024-05-26T00:00:00Z",
  }); // Function to calculate how long ago a review was posted

  const calculateTimeAgo = (visit_date) => {
    const reviewDate = new Date(visit_date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - reviewDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    if (diffDays < 30) {
      if (diffDays == 1) return `${diffDays} day ago`;
      else return `${diffDays} days ago`;
    } else {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths == 1) return `${diffMonths} month ago`;
      else return `${diffMonths} months ago`;
    }
  };
  // Function to fetch restaurant details based on the restaurant ID
  const RestOn = async (restId) => {
    try {
      const response = await axios.get(`${URL}/api/restaurant/list`);
      response.data.data.forEach((element) => {
        if (element.Id == restId) {
          // If the current element matches the restId, update the RestInfo state
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
        // When the server responds but the status code is out of the 2xx range
        console.error(
          "Server response error:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        // When the request was made but no response was received
        console.error(
          "No response from the server. It could be a network issue.",
          error.request
        );
      } else {
        // When an error occurred in setting up the request
        console.error("Error in setting up the request:", error.message);
      }
    }
  };
  const ReviewOn = async (name) => {
    try {
      const response = await axios.get(`${URL}/api/review/view?name=${name}`);
      setReviews(response.data.reviews);
      const reviewData = response.data.reviews[0];
    } catch (error) {
      if (error.response) {
        // When the server responds but the status code is out of the 2xx range
        console.error(
          "Server response error:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        // When the request was made but no response was received
        console.error(
          "No response from the server. It could be a network issue.",
          error.request
        );
      } else {
        // When an error occurred in setting up the request
        console.error("Error in setting up the request:", error.message);
      }
    }
  };

  useEffect(() => {
    if (id != 0) {
      RestOn(restId);
    }
  }, [restId]);

  useEffect(() => {
    if (RestInfo.name !== "") {
      ReviewOn(RestInfo.name);
    }
  }, [RestInfo.name]); // Call ReviewOn function whenever RestInfo.name changes

  // Bookmark
  // Add useState to manage bookmark state
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    bookmarks[RestInfo.id] ? setIsBookmarked(true) : setIsBookmarked(false);
  });

  // Function to toggle bookmark state
  const toggleBookmark = async () => {
    if (isBookmarked) {
      // If the bookmark is already set, delete the bookmark.
      try {
        const response = await axios.delete(
          `${URL}/api/favorite/delete/${RestInfo.name}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${userToken}`,
            },
          }
        );
        console.log(response.data);
        setIsBookmarked(false); // Update bookmark state
        bookmarkGet(userToken);
      } catch (error) {
        console.error(error.response ? error.response.data : error);
      }
    } else {
      // If the bookmark is not set, add the bookmark.
      try {
        const response = await axios.post(
          `${URL}/api/favorite/add/${RestInfo.name}/`,
          null,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${userToken}`,
            },
          }
        );
        console.log(response.data);
        setIsBookmarked(true); // Update bookmark state
        bookmarkGet(userToken);
      } catch (error) {
        console.error(error.response ? error.response.data : error);
      }
    }
  };

  if (id != 0) {
    return (
      <>
        <div className={styles.container}>
          <RestaurantInfo RestInfo={RestInfo} closeModal={closeModal} />
          <img
            className={styles.bookmarkIcon}
            onClick={toggleBookmark}
            style={{
              display: isLoggedIn ? "block" : "none",
            }}
            src={isBookmarked ? bookmarkIconYellow : bookmarkIconGray}
            alt="Bookmark"
          />
          <div className={styles.body}>
            <div className={styles.review}>
              <div className={styles.review2}>Review</div>
              <div className={styles.line1}></div>
            </div>{" "}
            <div className={styles.reviewContainer}>
              {reviews.map((ReviewInfo) => (
                <Review
                  key={ReviewInfo.review_id} // Add a unique key property
                  userName={ReviewInfo.user_name}
                  date={ReviewInfo.visit_date}
                  content={ReviewInfo.review_text}
                  rating={ReviewInfo.rating}
                  timeAgo={calculateTimeAgo(ReviewInfo.visit_date)}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Restaurant;
