import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FeedbackForm.module.css";
import FeedbackForm from "./FeedbackForm"; // Import FeedbackForm component

function FeedbackPage() {
  const [isFbModalOpen, setIsFbModalOpen] = useState(true); // State to control modal visibility
  const navigate = useNavigate();
  const fbModalRef = useRef();

  // Function to close the feedback modal and navigate to the home page
  const closeFbModal = () => {
    setIsFbModalOpen(false);
    navigate("/");
  };

  return (
    <div>
      {isFbModalOpen && (
        <div ref={fbModalRef} className={styles.modalWrapper}>
          <div className={styles.mainForm}>
            <button onClick={closeFbModal} className={styles.closeButton}></button>
            <FeedbackForm closeModal={closeFbModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackPage; // Export the FeedbackPage component
