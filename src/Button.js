import { useAuth } from "./AuthContext";
import styles from "./Button.module.css";
import halalIcon from "./assets/Icons/flag_halal.svg";
import veganIcon from "./assets/Icons/flag_vegan.svg";
import glutenIcon from "./assets/Icons/flag_glutenfree.svg";
import lactoIcon from "./assets/Icons/flag_loctosfree.svg";

import halalIcon1 from "./assets/Icons/flag_halal1.svg";
import veganIcon1 from "./assets/Icons/flag_vegan1.svg";
import glutenIcon1 from "./assets/Icons/flag_glutenfree1.svg";
import lactoIcon1 from "./assets/Icons/flag_loctosfree1.svg";
import { useEffect, useState } from "react";

function Button({ attribute }) {
  const [cssList, setCssList] = useState({
    Vegan: "rgba(118, 199, 183, 0.8)",
    Halal: "rgba(118, 199, 131, 0.8)",
    "Gluten-Free": "rgba(247, 247, 247, 0.8)",
    "Lacto-Free": "rgba(254, 246, 176, 0.8) ",
  });

  const [list, setList] = useState({
    Vegan: veganIcon,
    Halal: halalIcon,
    "Gluten-Free": glutenIcon,
    "Lacto-Free": lactoIcon,
  });
    
  const [icons, setIcons] = useState({
    Vegan: { default: veganIcon1, active: veganIcon },
    Halal: { default: halalIcon1, active: halalIcon },
    "Gluten-Free": { default: glutenIcon1, active: glutenIcon },
    "Lacto-Free": { default: lactoIcon1, active: lactoIcon },
  });

  const { dietToggle, setDietToggle } = useAuth();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(list.Vegan);
  }, []);
  const onClick = () => {
    // dietToggle 객체를 스프레드 연산자로 복사
    const updatedDietToggle = { ...dietToggle };
    // 해당 attribute의 값을 반전
    updatedDietToggle[attribute] = !updatedDietToggle[attribute];
    setDietToggle(updatedDietToggle);
  };

  const className = `${
    dietToggle[attribute] ? styles.selectedTrue : styles.selectedFalse
  } ${styles.distance}`;

  useEffect(() => {
    // 모든 attribute에 대해 아이콘 업데이트
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
        // JSX 내에서 style 수정
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
