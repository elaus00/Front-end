import styles from "./Pureplate/Pureplate.module.css";

import { ChevronDown } from "./ChevronDown/ChevronDown.jsx";
import { useEffect, useState } from "react";
import Signin from "./Signin/Signin.jsx";

function Profile() {
  const [logedin, setLogedin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   setLogedin(true);
  // }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onClick = () => {
    setLogedin(false);
  };

  return (
    <>
      <button
        className={`${styles.profile} ${styles.signin}`}
        onClick={openModal}
      >
        {!logedin ? (
          // <div className={styles.signin}>Sign-in</div>
          "Sign-in"
        ) : (
          <>
            <img className={styles.profileImage} src="profile-image0.png" />
            <div className={styles.jiwoo}>Jiwoo </div>
            <ChevronDown className={styles.chevronDownInstance2}></ChevronDown>
          </>
        )}
      </button>
      <Signin isOpen={isModalOpen} close={closeModal} />
    </>
  );
}

export default Profile;
