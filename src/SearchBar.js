import styles from "./Pureplate/Pureplate.module.css";
// import Search2 from "./Search2.jsx";
import SearchButton from "./Search/SearchButton.jsx";
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
      <form className={styles.search} onSubmit={onSubmit}>
        <input
          className={styles.search2}
          type="text"
          name="search"
          id="searchInput"
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
