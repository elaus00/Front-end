// import styles from "./Pureplate/Pureplate.module.css";
import styles from "./Profile.module.css";
import { ChevronDown } from "./ChevronDown/ChevronDown.jsx";
import { useEffect, useState } from "react";
import Signin from "./Signin/Signin.jsx";
import { useAuth } from "./AuthContext.jsx";

function Profile() {
  const { isLoggedIn, login, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // 드롭다운 메뉴 상태 관리

  useEffect(() => {
    login();
  }, []);

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
        <button
          className={styles.profile}
          onClick={isLoggedIn ? toggleDropdown : openModal} // 로그인 상태에 따라 함수 변경
        >
          {!isLoggedIn ? (
            // <div className={styles.signin}>Sign-in</div>
            <span style={{ width: "100%" }}>Sign-in</span>
          ) : (
            <>
              <img className={styles.profileImage} src="profile-image0.png" />
              <div className={styles.jiwoo}>Jiwoo </div>
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
              <li>My Page</li>
              <li>Contact</li>
              <li
                onClick={() => {
                  logout();
                  setDropdownOpen(false);
                }}
              >
                Logout
              </li>
              {/* 로그아웃 처리 */}
            </ul>
          </div>
        )}
        <Signin isOpen={isModalOpen} close={closeModal} />
      </div>
    </div>
  );
}

export default Profile;
