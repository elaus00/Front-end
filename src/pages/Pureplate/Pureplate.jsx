import React from "react";
import styles from "./Pureplate.module.css";
import { Plus } from "../../components/Map/Plus/Plus.jsx";
import { Minus } from "../../components/Map/Minus/Minus.jsx";
import Attributes from "../../components/DietAttributes/DietAttributes.js";
import SearchBar from "../../components/Search/SearchBar.js";
import Profile from "../../components/Profile/Profile.jsx";
import Signin from "../../components/Profile/Signin/Signin.jsx";
import MapNaverCur from "../../components/Map/Map.js";

const Pureplate = ({ className, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeLogedIn + " " + className}>
        <div className={styles.mapContainer}>
          <MapNaverCur />
          <header>
            <div className={styles.purePlateIcon} />
            <SearchBar />
            <Attributes />
            <Profile />
          </header>
        </div>
      </div>
    </div>
  );
};

export default Pureplate;
