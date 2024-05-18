import styles from "./Plus.module.css";

export const Plus = ({ className, ...props }) => {
  return <img className={styles.plus + " " + className} src="plus.svg" />;
};
