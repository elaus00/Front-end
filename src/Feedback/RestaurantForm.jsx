// import styles from "./Feedback.module.css"; // CSS 모듈 불러오기
import React, { useState } from "react";
import styles from "./RestaurantForm.module.css"; // CSS 모듈 import

function RestaurantForm() {
  const [restaurantName, setRestaurantName] = useState("");
  const [menuOptions, setMenuOptions] = useState({
    korean: false,
    chinese: false,
    western: false,
    vegan: false,
  });
  const [additionalComments, setAdditionalComments] = useState("");

  const handleNameChange = (e) => {
    setRestaurantName(e.target.value);
  };

  const handleMenuChange = (e) => {
    const { name, checked } = e.target;
    setMenuOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  const handleCommentsChange = (e) => {
    setAdditionalComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log("Form submitted with:", {
      restaurantName,
      menuOptions,
      additionalComments,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formField}>
        <label htmlFor="restaurantName" className={styles.formLabel}>
          Restaurant Name:
        </label>
        <input
          type="text"
          id="restaurantName"
          value={restaurantName}
          onChange={handleNameChange}
          className={styles.input}
        />
      </div>
      <div className={styles.checkboxContainer}>
        <p>Menu Options:</p>
        {/* 체크박스 항목들 */}
        <label>
          <input
            type="checkbox"
            className={styles.checkbox}
            name="korean"
            checked={menuOptions.korean}
            onChange={handleMenuChange}
          />
          Vegan
        </label>
        <label>
          <input
            type="checkbox"
            className={styles.checkbox}
            name="chinese"
            checked={menuOptions.chinese}
            onChange={handleMenuChange}
          />
          Halal
        </label>
        <label>
          <input
            type="checkbox"
            className={styles.checkbox}
            name="western"
            checked={menuOptions.western}
            onChange={handleMenuChange}
          />
          Gluten-Free
        </label>
        <label>
          <input
            type="checkbox"
            className={styles.checkbox}
            name="vegan"
            checked={menuOptions.vegan}
            onChange={handleMenuChange}
          />
          Lacto-Free
        </label>
      </div>
      <div className={styles.formField}>
        <label htmlFor="additionalComments" className={styles.formLabel}>
          Additional Comments:
        </label>
        <textarea
          id="additionalComments"
          value={additionalComments}
          onChange={handleCommentsChange}
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}

export default RestaurantForm;
