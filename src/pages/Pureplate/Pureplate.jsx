import React from 'react';
import styles from "./Pureplate.module.css";
import { Plus } from "../../components/Map/Plus/Plus.jsx";
import { Minus } from "../../components/Map/Minus/Minus.jsx";
import Attributes from "../../components/Attributes.js";
import SearchBar from "../../components/SearchBar.js";
import Profile from "../../Profile.jsx";
import Signin from "../../components/Signin/Signin.jsx";
import MapNaverCur from "../../components/Map/Map.js";

const Pureplate = ({ className, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <header
        className={styles.header}
        style={{
          backgroundColor: "white",
          opacity: 1,
          width: "100%",
        }}
      >
        <img className={styles.purePlateIcon} src="pure-plate-icon0.png" />
        <SearchBar />
        <Attributes />
        <Profile />
      </header>
      <div className={styles.homeLogedIn + " " + className}>
        <div className={styles.mapContainer}>
          <MapNaverCur />
          <div className={styles.contents}>
            <div className={styles.mapView}>
              <div className={styles.mapZoom}>
                <div className={styles.rectangle}></div>
                <Plus className={styles.plusInstance}></Plus>
                <Minus className={styles.minusInstance}></Minus>
                <div className={styles.seperator}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Pureplate;
