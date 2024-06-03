import styles from "./ChevronDown.module.css";
import chevronDown from "../assets/Icons/chevron-down.svg";

// ChevronDown component
export const ChevronDown = ({ className, ...props }) => {
  return (
    <img
      className={styles.chevronDown + " " + className}
      src={chevronDown}
      alt="down"
    />
  );
};
