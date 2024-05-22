// import styles from "./Pureplate/Pureplate.module.css";
// import Search2 from "./Search2.jsx";
import SearchButton from "./Search/SearchButton.jsx";
import { useEffect, useState } from "react";

import styles from "./SearchBar.module.css";
import axios from "axios";

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

  // GET test
  const [restaurants, setRestaurants] = useState([]);

  const on = async () => {
    try {
      const response = await axios.get("/register.json");
      // 받아온 JSON 데이터를 처리

      // JSON 데이터를 처리하는 추가 로직
      // 예를 들어, 데이터를 화면에 표시하거나 다른 작업을 수행할 수 있습니다.

      // 데이터 안의 각 카테고리 리스트를 순회합니다.
      const data = response.data.data[0]; // 'data' 배열의 첫 번째 객체를 가져옵니다.

      // // 'Category1List'의 레스토랑 이름을 출력합니다.
      // data.Category1List.forEach((restaurant) => {
      //   let newRestaurantName = restaurant.restaurantName;
      //   setRestaurants([...restaurants, newRestaurantName]);
      // });

      // // 'Category2List'의 레스토랑 이름을 출력합니다.
      // data.Category2List.forEach((restaurant) => {
      //   let newRestaurantName = restaurant.restaurantName;
      //   setRestaurants([...restaurants, newRestaurantName]);

      //   wholeTextArray = restaurant;
      // });

      // 'Category1List'와 'Category2List'의 레스토랑 이름을 한 번에 추가합니다.
      const newRestaurants = [
        ...data.Category1List.map((restaurant) => restaurant.restaurantName),
        ...data.Category2List.map((restaurant) => restaurant.restaurantName),
      ];
      setRestaurants((prev) => [...prev, ...newRestaurants]);
    } catch (error) {
      console.error("파일을 받아오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    on();
  }, []);
  //

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
          autoComplete="off"
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
