import styles from "./Pureplate.module.css";
import { MapPin } from "../MapPin/MapPin.jsx";
import { Plus } from "../Plus/Plus.jsx";
import { Minus } from "../Minus/Minus.jsx";
import Attributes from "../Attributes.js";
import SearchBar from "../SearchBar.js";
import Profile from "../Profile.jsx";
import Signin from "../Signin/Signin.jsx";

const Pureplate = ({ className, ...props }) => {
  return (
    <div className={styles.homeLogedIn + " " + className}>
      <div className={styles.contents}>
        <div className={styles.mapView}>
          <img className={styles.rectangle8} src="rectangle-80.png" />
          <img className={styles.vector} src="vector0.svg" />
          <div className={styles.mapPin}>
            {/* <MapPin className={styles.mapPinInstance}></MapPin>
            <MapPin className={styles.mapPinInstance2}></MapPin>
            <MapPin className={styles.mapPinInstance3}></MapPin>
            <MapPin className={styles.mapPinInstance4}></MapPin>
            <MapPin className={styles.mapPinInstance5}></MapPin>
            <MapPin className={styles.mapPinInstance6}></MapPin>
            <MapPin className={styles.mapPinInstance7}></MapPin>
            <MapPin className={styles.mapPinInstance8}></MapPin>
            <MapPin className={styles.mapPinInstance9}></MapPin>
            <MapPin className={styles.mapPinInstance10}></MapPin>
            <MapPin className={styles.mapPinInstance11}></MapPin>
            <MapPin className={styles.mapPinInstance12}></MapPin>
            <MapPin className={styles.mapPinInstance13}></MapPin> */}
          </div>
          <div className={styles.propertyCard}>
            <div className={styles.frame9}>
              <div className={styles.imageHeader}>
                <div className={styles.next}>
                  <img className={styles.next2} src="next1.svg" />
                </div>
                <img className={styles.image2} src="image-20.png" />
              </div>
              <div className={styles.frame7}>
                <div className={styles.frame4}>
                  <div className={styles.div}>잘 빠진 메밀 </div>
                </div>
                <div className={styles.frame5}>
                  <div className={styles.four5}>★4.5 </div>
                  <div className={styles.rectangle2}></div>
                  <div className={styles.four8Reviews}>48 Reviews </div>
                </div>
              </div>
            </div>
            <img className={styles.polygon3} src="polygon-30.svg" />
          </div>
          <div className={styles.mapZoom}>
            <div className={styles.rectangle}></div>
            <Plus className={styles.plusInstance}></Plus>
            <Minus className={styles.minusInstance}></Minus>
            <div className={styles.seperator}></div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Pureplate;
