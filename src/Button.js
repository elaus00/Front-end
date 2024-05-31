import trueStyles from "./AttributesButtonSelectedTrue/AttributesButtonSelectedTrue.module.css";
import falseStyles from "./AttributesButtonSelectedFalse/AttributesButtonSelectedFalse.module.css";
import { useAuth } from "./AuthContext";
// import styles from "./Button.module.css";
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
  const [list, setList] = useState({
    Vegan: veganIcon,
    Halal: halalIcon,
    "Gluten-Free": glutenIcon,
    "Lacto-Free": lactoIcon,
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
    dietToggle[attribute] ? trueStyles.selectedTrue : falseStyles.selectedFalse
  } ${trueStyles.distance}`;

  const iconClass = `${
    dietToggle[attribute] ? styles.selectedTrue : styles.selectedFalse
  } ${trueStyles.distance}`;
  return (
    <>
      {windowWidth > 768 ? (
        <div className={className} onClick={onClick}>
          {attribute}
        </div>
      ) : (
        <img
          className={iconClass}
          onClick={onClick}
          src={list[attribute]}
          alt="search"
        />
      )}
    </>
  );
}

export default Button;
