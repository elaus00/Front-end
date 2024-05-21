// import styles from "./Pureplate/Pureplate.module.css";
// import Search2 from "./Search2.jsx";
import SearchButton from "./Search/SearchButton.jsx";
import { useEffect, useState } from "react";

import styles from "./SearchBar.module.css";

const wholeTextArray = [
  "apple",
  "banana",
  "coding",
  "javascript",
  "원티드",
  "프론트엔드",
  "찬행식당",
];
function SearchBar() {
  const [query, setQuery] = useState("");
  const [isHaveQuery, setIsHaveQuery] = useState(false);
  const [dropDownList, setDropDownList] = useState(wholeTextArray);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

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
    setIsHaveQuery(true);
  };

  //한글
  const showDropDownList = () => {
    if (query === "") {
      setIsHaveQuery(false);
      setDropDownList([]);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const choosenTextList = wholeTextArray.filter((textItem) =>
        textItem.toLowerCase().includes(lowerCaseQuery)
      );
      setDropDownList(choosenTextList);
    }
  };
  const clickDropDownItem = (clickedItem) => {
    setQuery(clickedItem);
    setIsHaveQuery(false);
  };

  const handleDropDownKey = (event) => {
    if (isHaveQuery) {
      if (
        event.key === "ArrowDown" &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }

      if (event.key === "ArrowUp" && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      if (event.key === "Enter" && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [query]);

  // 기존
  const [keyItems, setKeyItems] = useState([]);

  const fetchData = () => {
    return fetch(
      `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`
    )
      .then((res) => res.json())
      .then((data) => data.slice(0, 100));
  };

  const updateData = async () => {
    const res = await fetchData();
    const lowerCaseQuery = query.toLowerCase();
    let filteredData = res
      .filter((list) => list.city.toLowerCase().includes(query))
      .slice(0, 10);
    setKeyItems(filteredData);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query) updateData();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [query]);

  return (
    <div className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <input
          className={styles.search}
          type="text"
          name="search"
          id="searchInput"
          placeholder="Search"
          onChange={onChange}
          onKeyUp={handleDropDownKey}
          value={query}
          autocomplete="off"
        />
        {/* {keyItems.length > 0 && query && (
          <div className={styles.AutoSearchContainer}>
            <ul>
              {keyItems.map((search, idx) => (
                <li
                  className={styles.AutoSearchData}
                  key={search.city}
                  onClick={() => setQuery(search.city)}
                >
                  <a href="#">{search.city}</a>
                  <img src="assets/imgs/searchIcon.svg" alt="arrowIcon" />
                </li>
              ))}
            </ul>
          </div>
        )} */}

        {isHaveQuery && (
          <ul className={styles.dropDownBox}>
            {dropDownList.length === 0 && (
              <li className={styles.dropDownItem}>해당하는 단어가 없습니다</li>
            )}
            {dropDownList.map((dropDownItem, dropDownIndex) => (
              <li
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={`${styles.dropDownItem} ${
                  dropDownItemIndex === dropDownIndex ? styles.selected : ""
                }`}
              >
                <img className={styles.union} src="searchIcon.svg" />
                <div className={styles.searchHistory}>
                  <span className={styles.recentSearch12}>{dropDownItem}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </form>
      <SearchButton onSubmit={onSubmit} />
    </div>
  );
}

export default SearchBar;
