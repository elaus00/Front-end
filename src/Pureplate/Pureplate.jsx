import React from "react";
import styles from "./Pureplate.module.css";
import MapNaverCur from "../Map/Map.js";
import Attributes from "../Attributes.js";
import SearchBar from "../SearchBar.js";
import Profile from "../Profile.jsx";
import Header from "../Header.js";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Restaurant from "../RestaurantInfo/Restaurant.jsx";

function Pureplate() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeLogedIn}>
        <div className={styles.mapContainer}>
          <MapNaverCur />
        </div>
      </div>
      <Restaurant />
      <header
        className={styles.header}
        style={{
          backgroundColor: "white",
          opacity: 1,
          width: "100%",
          display: "none",
        }}
      >
        <Link to="/">
          <img className={styles.purePlateIcon} src="pure-plate-icon0.png" />{" "}
        </Link>
        <SearchBar />
        <Attributes />
        <Profile />
      </header>
    </div>
  );
}

export default Pureplate;
