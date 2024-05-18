import { ChevronDown } from "./ChevronDown/ChevronDown.jsx";
import Search from "./Search/Search.jsx";
import styles from "./Pureplate/Pureplate.module.css";

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.options}>
        <div className={styles.vegan}>Vegan </div>
        <ChevronDown className={styles.chevronDownInstance}></ChevronDown>
      </div>
      <div className={styles.search}>
        <div className={styles.search2}>Search </div>
      </div>
      <div className={styles.button}>
        <div className={styles.rectangle2}></div>
        <Search className={styles.searchInstance}></Search>
      </div>
    </div>
  );
}

export default SearchBar;
