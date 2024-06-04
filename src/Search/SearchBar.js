import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import axios from "axios";
import { useAuth } from "../AuthContext.jsx";
import findIcon from "../assets/Icons/searchIcon.svg";
import historySearchIcon from "../assets/Icons/historySearchIcon.svg";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  // State to store restaurant data
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsSet, setRestaurantsSet] = useState();
  const [query, setQuery] = useState("");
  const [isHaveQuery, setIsHaveQuery] = useState(false);
  const [dropDownList, setDropDownList] = useState(restaurants);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);
  const { URL, setRestaurantNameList, restaurantNameList } = useAuth();
  const navigate = useNavigate();

  // Fetch restaurant data from the API
  const fetchRestaurant = async () => {
    try {
      const response = await axios.get(`${URL}/api/restaurant/list`);

      const restaurantNames = response.data.data.map((element) => element.Name);
      const restaurantSet = response.data.data.reduce((acc, element) => {
        acc[element.Name] = element.Id;
        return acc;
      }, {});
      setRestaurantsSet(restaurantSet);
      setRestaurants(restaurantNames);
      setRestaurantNameList(restaurantNames);
    } catch (error) {
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        console.error(
          "Server response error:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        // The request was made but no response was received
        console.error(
          "No response from server. This could be a network issue.",
          error.request
        );
      } else {
        // An error occurred in setting up the request
        console.error("Error in setting up request:", error.message);
      }
    }
  };
  useEffect(() => {
    console.log(restaurantNameList);
  }, [restaurantNameList]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  // Handle form submission
  const onSubmit = (event) => {
    event.preventDefault();
    const link = restaurantsSet[query.trim()];
    if (link) {
      navigate(`/${link}`);
      setQuery("");
    }
  };

  // Handle input change
  const onChange = (event) => {
    setQuery(event.target.value);
    setIsHaveQuery(true);
  };

  // Update dropdown list based on query
  const showDropDownList = () => {
    if (query === "") {
      setIsHaveQuery(false);
      setDropDownList([]);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const choosenTextList = restaurants.filter((textItem) =>
        textItem.toLowerCase().includes(lowerCaseQuery)
      );
      setDropDownList(choosenTextList);
    }
  };

  // Handle click on dropdown item
  const clickDropDownItem = (clickedItem) => {
    setQuery(clickedItem);
    setIsHaveQuery(false);
  };

  // Handle keyboard navigation in dropdown
  const handleDropDownKey = (event) => {
    if (
      event.key === "ArrowDown" &&
      dropDownList.length - 1 > dropDownItemIndex
    ) {
      setDropDownItemIndex(dropDownItemIndex + 1);
    }

    if (event.key === "ArrowUp" && dropDownItemIndex >= 0) {
      setDropDownItemIndex(dropDownItemIndex - 1);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      if (dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
      } else if (restaurantsSet[query.trim()]) {
        onSubmit(event); // Trigger form submission if the query is valid
      } else {
      }
      setDropDownItemIndex(-1);
    }
  };

  useEffect(showDropDownList, [query]);

  return (
    <div className={styles.searchBar}>
      {/* Form for search input */}
      <form className={styles.searchForm} onSubmit={onSubmit}>
        {/* Search input field */}
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          id="searchInput"
          placeholder="Search"
          onChange={onChange} // Handler for input change
          onKeyUp={handleDropDownKey} // Handler for key up event
          value={query} // Controlled input value
          autoComplete="off" // Disable autocomplete
        />
        {/* Conditional rendering of dropdown list */}
        {isHaveQuery && (
          <ul className={styles.dropDownBox}>
            {/* Message when no matching words are found */}
            {dropDownList.length === 0 && (
              <li className={styles.dropDownItem}>No matching words found</li>
            )}
            {/* Render each item in the dropdown list */}
            {dropDownList.map((dropDownItem, dropDownIndex) => (
              <li
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)} // Click handler for dropdown item
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)} // Mouse over handler for dropdown item
                className={`${styles.dropDownItem} ${
                  dropDownItemIndex === dropDownIndex ? styles.selected : ""
                }`}
              >
                <img
                  className={styles.union}
                  src={historySearchIcon}
                  alt="search"
                />
                <div className={styles.searchHistory}>
                  <span className={styles.recentSearch12}>{dropDownItem}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </form>
      {/* Search button */}
      <button className={styles.searchButton} onClick={onSubmit}>
        <img className={styles.searchIcon} src={findIcon} alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;
