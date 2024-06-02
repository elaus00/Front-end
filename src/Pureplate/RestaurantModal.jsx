import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pureplate.module.css";
import Restaurant from "../Restaurant/Restaurant.jsx";

function RestaurantModal({ id, closeModal }) {
  const restModalRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (restModalRef.current && !restModalRef.current.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
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
