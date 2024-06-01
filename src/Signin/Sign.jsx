import React, { useState } from "react";
import SignUp from "./SignUp.jsx";
import styles from "./Signin.module.css";
import SignIn from "./SignIn.jsx";
import xIcon from "../assets/Icons/x0.svg";

function Sign({ isOpen, close }) {
  // State to track whether the sign up form is displayed
  const [isSignUp, setIsSignUp] = useState(false);

  // Switch to the sign up form
  const switchToSignUp = () => setIsSignUp(true);

  // Switch to the sign in form
  const switchToSignIn = () => setIsSignUp(false);

  // Handle the close action, reset to sign in form
  const handleClose = () => {
    setIsSignUp(false);
    close();
  };

  // Render the modal only if isOpen is true
  return isOpen ? (
    <div className={styles.modal}>
      <div className={styles.signIn}>
        {/* Main title showing whether it's sign up or sign in */}
        <div className={styles.signInMain}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </div>
        <div className={styles.frame36}>
          {/* Conditionally render SignUp or SignIn component */}
          {isSignUp ? (
            <SignUp switchToSignIn={switchToSignIn} close={handleClose} />
          ) : (
            <SignIn switchToSignUp={switchToSignUp} close={handleClose} />
          )}
          <div className={styles.frame34}>
            <div className={styles.frame32}>
              <div className={styles.signUpText}>
                {isSignUp
                  ? "Already have an account?"
                  : "Don’t you have any account?"}
              </div>
              {/* Switch between sign up and sign in on text click */}
              <div
                className={styles.signUp}
                onClick={isSignUp ? switchToSignIn : switchToSignUp}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </div>
            </div>
          </div>
        </div>
        {/* Close button */}
        <img
          className={styles.x}
          src={xIcon}
          alt="Close"
          onClick={handleClose}
        />
      </div>
    </div>
  ) : null;
}

export default Sign;
