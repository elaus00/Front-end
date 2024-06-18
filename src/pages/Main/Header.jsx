import React from "react";
import { Link } from "react-router-dom";
import styles from "./Pureplate.module.css";
import SearchBar from "../../components/Search/SearchBar.js";
import Attributes from "../../components/Attributes/Attributes.js";
import Profile from "../../pages/Profile/Profile.jsx";
import BookmarkIcon from "../../components/Bookmark/BookmarkIcon.jsx";
import logo_icon from "../../assets/Icons/logo_icon.png";

// Functional component for rendering the header section
function Header({ isRestModalOpen, bookmarkToggle }) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.purePlateIcon} src={logo_icon} alt="logo" />
      </Link>
      <SearchBar />
      <BookmarkIcon
        isRestModalOpen={isRestModalOpen}
        bookmarkToggle={bookmarkToggle}
      />
      <Attributes />
      <Profile />
    </header>
  );
}

export default Header;
