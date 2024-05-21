import React from "react";
import styles from "./Pureplate.module.css";
import MapNaverCur from "../../components/Map/Map.js";
import Header from "./Header/header.jsx";
import { MapPin } from "../MapPin/MapPin.jsx";
import { Plus } from "../Plus/Plus.jsx";
import { Minus } from "../Minus/Minus.jsx";
import Attributes from "../Attributes.js";
import SearchBar from "../SearchBar.js";
import Profile from "../Profile.jsx";
import Header from "../Header.js";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Pureplate = ({ className, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeLogedIn + " " + className}>
        <div className={styles.mapContainer}>
          <MapNaverCur />
        </div>
        <Header />
      </div>
      <header
        className={styles.header}
        style={{
          backgroundColor: "white",
          opacity: 1,
          width: "100%",
        }}
      >
        <Link to="/">
          <img className={styles.purePlateIcon} src="pure-plate-icon0.png" />{" "}
        </Link>
        <SearchBar />
        <Attributes />
        <Profile />
      </header>

      {/* <Header /> */}
    </div>
  );
};

export default Pureplate;
