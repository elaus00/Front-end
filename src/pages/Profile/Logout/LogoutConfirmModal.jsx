import React from "react";
import styles from "./LogoutConfirmModal.module.css";

function LogoutConfirmModal({ isOpen, onClose, onConfirm }) {
  // If the modal is not open, return null to render nothing
  if (!isOpen) {
    return null;
  }
  // Render the modal when it is open

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Confirm Logout</h2>
        <p>Are you sure you want to log out?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onClose}>
            No
          </button>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirmModal;
