import styles from "../SearchBar.module.css";
import searchStyles from "./Search.module.css";

function SearchButton({ onSubmit }) {
  return (
    <button className={styles.button} onClick={onSubmit}>
      <img
        className={styles.searchIcon}
        src="/assets/search.svg"
        alt="Search"
      />
      {/* search.module.css랑 합치기 */}
    </button>
  );
}

export default SearchButton;
