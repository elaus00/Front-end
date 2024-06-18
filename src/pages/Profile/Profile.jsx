import { ChevronDown } from "../../components/ChevronDown/ChevronDown.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import Sign from "./Signin/Sign.jsx";
import LogoutConfirmModal from "./Logout/LogoutConfirmModal.jsx";
import styles from "./Profile.module.css";
import profileIcon from "../../assets/Icons/profile.svg";

function Profile() {
  // Get login state and user information from the AuthContext

  const { isLoggedIn, login, logout, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false); // Logout confirmation modal state
  const navigate = useNavigate();

  // Close the sign-in modal if the user is logged in

  useEffect(() => {
    if (isLoggedIn) {
      closeModal();
    }
  }, [isLoggedIn]);
  // Open the sign-in modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the sign-in modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Toggle the dropdown menu
  const toggleDropdown = () => {
    if (isLoggedIn) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  // Open the logout confirmation modal
  const openLogoutConfirm = () => {
    setIsLogoutConfirmOpen(true);
    setDropdownOpen(false);
  };

  // Close the logout confirmation modal
  const closeLogoutConfirm = () => {
    setIsLogoutConfirmOpen(false);
  };

  // Show a success alert when the user logs out
  const showAlert = () => {
    alert("You have successfully logged out! Goodbye!!");
  };

  // Handle the logout process
  const handleLogout = () => {
    logout();
    showAlert();
    setIsLogoutConfirmOpen(false);
    navigate("/");
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.dropdownContainer}>
        <img
          className={styles.profileIcon}
          src={profileIcon}
          alt="profile"
          onClick={isLoggedIn ? toggleDropdown : openModal}
        />
        <button
          className={styles.profile}
          onClick={isLoggedIn ? toggleDropdown : openModal}
        >
          {!isLoggedIn ? (
            <span style={{ width: "100%" }}>Sign In</span>
          ) : (
            <>
              <div className={styles.jiwoo}>{user}</div>
              <ChevronDown
                className={styles.chevronDownInstance2}
              ></ChevronDown>
            </>
          )}
        </button>
        {dropdownOpen && (
          <div
            className={`${styles.dropdownMenu} ${
              dropdownOpen
                ? styles["slide-fade-in-dropdown"]
                : styles["slide-fade-out-dropdown"]
            }`}
          >
            <ul>
              <li className={styles.dropProfile}>{user}</li>
              <Link to="/Feedback" style={{ color: "black" }}>
                <li
                  onClick={() => {
                    console.log(user);
                    setDropdownOpen(false);
                  }}
                  style={{ color: "black" }}
                >
                  Feedback
                </li>
              </Link>
              <li onClick={openLogoutConfirm}>Logout</li>
            </ul>
          </div>
        )}
        <Sign isOpen={isModalOpen} close={closeModal} />
        <LogoutConfirmModal
          isOpen={isLogoutConfirmOpen}
          onClose={closeLogoutConfirm}
          onConfirm={handleLogout}
        />
      </div>
    </div>
  );
}

export default Profile;
