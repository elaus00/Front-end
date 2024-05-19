import styles from "../SearchBar.module.css";
import searchStyles from "./Search.module.css";

function SearchButton({ onSubmit }) {
  const onClick = () => {
    console.log("x");
  };
  return (
    <button className={styles.button} onClick={onSubmit}>
      <img
        className={searchStyles.search + " " + styles.searchInstance}
        src="search.svg"
      />
      {/* search.module.css랑 합치기 */}
    </button>
  );
}

export default SearchButton;
