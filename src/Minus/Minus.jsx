import styles from "./Minus.module.css";

export const Minus = ({ className, ...props }) => {
  return <img className={styles.minus + " " + className} src="minus.svg" />;
};
