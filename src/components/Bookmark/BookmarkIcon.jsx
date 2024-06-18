import React from "react";
import styles from "./Bookmark.module.css";
import bookmarkSelected from "../../assets/Icons/Bookmark/Star1.svg";
import bookmarkUnselected from "../../assets/Icons/Bookmark/Star2.svg";
import { useAuth } from "../../context/AuthContext.jsx";

function BookmarkIcon({ isRestModalOpen, bookmarkToggle }) {
  // Get the isLoggedIn and bookmarksToggle values from the AuthContext
  const { isLoggedIn, bookmarksToggle } = useAuth();

  // If the rest modal is open or the user is not logged in, don't render the component
  if (isRestModalOpen || !isLoggedIn) {
    return null;
  }

  // Render the bookmark icon
  return (
    <img
      className={styles.starIcon}
      onClick={bookmarkToggle}
      alt="search"
      src={bookmarksToggle ? bookmarkSelected : bookmarkUnselected}
    />
  );
}

export default BookmarkIcon;
