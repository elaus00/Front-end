import styles from "./Search.module.css";

function Search({ className, ...props }) {
  return <img className={styles.search + " " + className} src="search.svg" />;
}

export default Search;
