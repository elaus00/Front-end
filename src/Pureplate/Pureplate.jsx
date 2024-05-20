import React from "react";
import styles from "./Pureplate.module.css";
import MapNaverCur from "../../components/Map/Map.js";
import Header from "./Header/header.jsx"; 

const Pureplate = ({ className, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.homeLogedIn + " " + className}>
        <div className={styles.mapContainer}>
          <MapNaverCur />
        </div>
        <Header />
      </div>
    </div>
  );
};

export default Pureplate;
