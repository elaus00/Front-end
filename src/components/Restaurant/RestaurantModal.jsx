import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import Restaurant from "../../components/Restaurant/Restaurant.jsx";

function RestaurantModal({ id, closeModal }) {
  // Reference to the modal element
  const restModalRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // Function to handle clicks outside the modal
    function handleClickOutside(event) {
      if (
        restModalRef.current &&
        !restModalRef.current.contains(event.target)
      ) {
        closeModal(); // Close the modal if the click is outside the modal
      }
    }
    // Add event listener to detect clicks outside the modal
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [restModalRef, closeModal]);

  return (
    <div
      ref={restModalRef}
      className={styles.modalWrapper}
      onClick={closeModal}
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <Restaurant id={id} closeModal={closeModal} />
      </div>
    </div>
  );
}

export default RestaurantModal;
