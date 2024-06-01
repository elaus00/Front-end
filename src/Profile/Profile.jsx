import { ChevronDown } from "../ChevronDown/ChevronDown.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";

import Sign from "./Signin/Sign.jsx";
import styles from "./Profile.module.css";
import profileIcon from "../assets/Icons/profile.svg";

function Profile() {
  const { isLoggedIn, login, logout, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 메뉴 상태 관리
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      closeModal();
    }
  }, [isLoggedIn]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    if (isLoggedIn) {
      setDropdownOpen(!dropdownOpen);
    }
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
          onClick={isLoggedIn ? toggleDropdown : openModal} // 로그인 상태에 따라 함수 변경
        >
          {!isLoggedIn ? (
            <span style={{ width: "100%" }}>Sign In</span>
          ) : (
            <>
              <div className={styles.jiwoo}>{user} </div>
              <ChevronDown
                className={styles.chevronDownInstance2}
              ></ChevronDown>
            </>
          )}
        </button>
        {dropdownOpen && ( // 드롭다운 메뉴 표시 조건
          <div
            className={`${styles.dropdownMenu} ${
              dropdownOpen
                ? styles["slide-fade-in-dropdown"]
                : styles["slide-fade-out-dropdown"]
            }`}
          >
            <ul>
              <li className={styles.dropProfile}>LCH</li>
              <Link to="/Feedback">
                <li
                  onClick={() => {
                    console.log(user);

                    setDropdownOpen(false);
                  }}
                >
                  Feedback
                </li>
              </Link>
              <li
                onClick={() => {
                  logout();
                  setDropdownOpen(false);
                  navigate("/");
                }}
              >
                Logout
              </li>
              {/* 로그아웃 처리 */}
            </ul>
          </div>
        )}
        <Sign isOpen={isModalOpen} close={closeModal} />
      </div>
    </div>
  );
}

export default Profile;
