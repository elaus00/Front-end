import { ChevronDown } from "./ChevronDown/ChevronDown.jsx";
import styles from "../pages/Pureplate/Pureplate.module.css";
// import Search2 from "./Search2.jsx";
import SearchButton from "../components/Search/SearchButton.jsx";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(query);
    if (query === "") {
      return;
    }
    setQuery("");
  };

  const onChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };
  return (
    <div className={styles.searchBar}>
      <div className={styles.options}>
        <div className={styles.vegan}>Vegan </div>
        <ChevronDown className={styles.chevronDownInstance}></ChevronDown>
      </div>
      <form className={styles.search} onSubmit={onSubmit}>
        <input
          className={styles.search2}
          type="text"
          name="search"
          id="searchInput"
          style={{
            //  border: "1px solid black"
            padding: "5px",
          }}
          placeholder="Search"
          onChange={onChange}
          value={query}
        />
      </form>
      <SearchButton onSubmit={onSubmit} />
    </div>
  );
}

export default SearchBar;
