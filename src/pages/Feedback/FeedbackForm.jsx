import React, { useState } from "react";
import styles from "./FeedbackForm.module.css";
import axios from "axios";
import { useAuth } from "../AuthContext";
import Swal from "sweetalert2";

// FeedbackForm component
function FeedbackForm({ closeModal }) {
  // State declarations
  const [restaurantName, setRestaurantName] = useState("");
  const [menuOptions, setMenuOptions] = useState({
    vegan: false,
    halal: false,
    gluten_free: false,
    lacto_free: false,
  });
  const [additionalComments, setAdditionalComments] = useState("");
  // New state for validation
  const [isValidRestaurant, setIsValidRestaurant] = useState(true);

  // Destructuring URL and restaurantNameList from useAuth hook
  const { URL, restaurantNameList } = useAuth();

  // Handler for restaurant name input
  const handleNameChange = (e) => {
    const value = e.target.value;
    setRestaurantName(value);
    setIsValidRestaurant(restaurantNameList.includes(value)); // Check if the name is valid
  };

  // Handler for menu options checkboxes
  const handleMenuChange = (e) => {
    const { name, checked } = e.target;
    setMenuOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  // Handler for additional comments textarea
  const handleCommentsChange = (e) => {
    setAdditionalComments(e.target.value);
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Thank you.", // Alert title
      text: `We will carefully review your valuable feedback.`, // Alert contents
      icon: "success", // Alert type (success, error, warning, info, question)
    });
  };
  const showFailAlert = () => {
    Swal.fire({
      title: "There was a problem with the feedback submission.", // Alert title
      text: "The restaurant name you entered is not found.", // Alert contents
      icon: "error", // Alert type (success, error, warning, info, question)
    });
  };

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidRestaurant) {
      showFailAlert();
      return;
    }
    const data = {
      restaurant_name: restaurantName,
      vegan: menuOptions.vegan,
      halal: menuOptions.halal,
      gluten_free: menuOptions.gluten_free,
      lacto_free: menuOptions.lacto_free,
      comments: additionalComments,
    };

    console.log(data);
    try {
      // Sending feedback data to the server
      const response = await axios.post(`${URL}/api/feedback/submit/`, data);
      console.log(response.data);
      showSuccessAlert();

      // Resetting the form fields after submission
      setRestaurantName("");
      setMenuOptions({
        vegan: false,
        halal: false,
        gluten_free: false,
        lacto_free: false,
      });
      setAdditionalComments("");

      // Close the modal after successful submission
      closeModal();
    } catch (error) {
      showFailAlert();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formTitle}>Feedback Form</div>
      <div className={styles.formField}>
        <label htmlFor="restaurantName" className={styles.formLabel}>
          Restaurant Name
        </label>
        <input
          type="text"
          id="restaurantName"
          name="restaurantName"
          value={restaurantName}
          onChange={handleNameChange}
          className={`${styles.input} ${
            !isValidRestaurant ? styles.invalidInput : ""
          }`} // Apply invalidInput style if not valid
        />
        {!isValidRestaurant && (
          <div className={styles.errorText}>Invalid restaurant name</div>
        )}
      </div>
      <div className={styles.checkboxContainer}>
        <label htmlFor="menuOptions" className={styles.formLabel}>
          Menu Options
        </label>
        {Object.keys(menuOptions).map((option) => (
          <label key={option} className={styles.optionLabel}>
            <input
              type="checkbox"
              id="checkbutton"
              className={styles.checkbox}
              checked={menuOptions[option]}
              onChange={handleMenuChange}
              name={option}
            />
            {option.charAt(0).toUpperCase() + option.slice(1).replace("_", "-")}
          </label>
        ))}
      </div>
      <div className={styles.formField}>
        <label htmlFor="additionalComments" className={styles.formLabel}>
          Additional Comments
        </label>
        <textarea
          id="additionalComments"
          name="additionalComments"
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

export default FeedbackForm;
