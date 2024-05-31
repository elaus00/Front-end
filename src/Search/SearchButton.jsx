import styles from "../SearchBar.module.css";
import searchStyles from "./Search.module.css";
import searchIcon from "../assets/Icons/search.svg";

function SearchButton({ onSubmit }) {
  return (
    <button className={styles.button} onClick={onSubmit}>
      <img
        className={searchStyles.search + " " + styles.searchInstance}
        src={searchIcon}
        alt="Search"
      />
      {/* search.module.css랑 합치기 */}
    </button>
  );
}

export default SearchButton;
