import { useAuth } from "../AuthContext";
import styles from "./Button.module.css";
import halalIcon from "../assets/Icons/flag_halal.svg";
import veganIcon from "../assets/Icons/flag_vegan.svg";
import glutenIcon from "../assets/Icons/flag_glutenfree.svg";
import lactoIcon from "../assets/Icons/flag_loctosfree.svg";

import halalIcon1 from "../assets/Icons/flag_halal1.svg";
import veganIcon1 from "../assets/Icons/flag_vegan1.svg";
import glutenIcon1 from "../assets/Icons/flag_glutenfree1.svg";
import lactoIcon1 from "../assets/Icons/flag_loctosfree1.svg";
import { useEffect, useState } from "react";

function Button({ attribute }) {
  const [cssList, setCssList] = useState({
    Vegan: "rgba(118, 199, 183, 0.85)",
    Halal: "rgba(118, 199, 131, 0.85)",
    "Gluten-Free": "rgba(233, 250, 234, 0.9)",
    "Lacto-Free": "rgba(254, 246, 176, 0.85) ",
  });

  const [list, setList] = useState({
    Vegan: veganIcon,
    Halal: halalIcon,
    "Gluten-Free": glutenIcon,
    "Lacto-Free": lactoIcon,
  });
    
  // Icons for different states (default and active)
  const [icons, setIcons] = useState({
    Vegan: { default: veganIcon1, active: veganIcon },
    Halal: { default: halalIcon1, active: halalIcon },
    "Gluten-Free": { default: glutenIcon1, active: glutenIcon },
    "Lacto-Free": { default: lactoIcon1, active: lactoIcon },
  });

  const { dietToggle, setDietToggle } = useAuth(); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle button click
  const onClick = () => {
    const updatedDietToggle = { ...dietToggle }; // Copy dietToggle object
    updatedDietToggle[attribute] = !updatedDietToggle[attribute]; // Toggle the attribute value
    setDietToggle(updatedDietToggle);
  };

  // Determine the className based on the attribute's state
  const className = `${
    dietToggle[attribute] ? styles.selectedTrue : styles.selectedFalse
  } ${styles.distance}`;

  // Update icons based on dietToggle state
  useEffect(() => {
    const updatedList = {};
    Object.keys(icons).forEach((key) => {
      updatedList[key] = dietToggle[key]
        ? icons[key].active
        : icons[key].default;
    });
    setList(updatedList);
  }, [dietToggle, icons]);

  return (
    <>
      {windowWidth > 900 ? (
        // Render a div with the attribute name and appropriate style
        <div
          className={className}
          onClick={onClick}
          style={
            dietToggle[attribute]
              ? { backgroundColor: cssList[`${attribute}`] }
              : {}
          }
        >
          {attribute}
        </div>
      ) : (
        // Render an image icon for smaller screens
        <img
          className={styles.toggleIcon}
          onClick={onClick}
          src={list[attribute]}
          alt="search"
        />
      )}
    </>
  );
}

export default Button; 
