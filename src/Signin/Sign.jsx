import React, { useState } from "react";
import SignUp from "./SignUp.jsx";
import styles from "./Signin.module.css";
import SignIn from "./SignIn.jsx";

function Sign({ isOpen, close }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const switchToSignUp = () => setIsSignUp(true);
  const switchToSignIn = () => setIsSignUp(false);

  return isOpen ? (
    <div className={styles.modal}>
      <div className={styles.signIn}>
        <div className={styles.signInMain}>
          {isSignUp ? "Sign-Up" : "Sign-In"}
        </div>
        {/* <div className={styles.frame37}> */}
        <div className={styles.frame36}>
          {isSignUp ? (
            <SignUp switchToSignIn={switchToSignIn} close={close} />
          ) : (
            <SignIn switchToSignUp={switchToSignUp} close={close} />
          )}
          <div className={styles.frame34}>
            <div className={styles.socialLoginText}>Social Login</div>
            <div className={styles.frame32}>
              <div className={styles.signUpText}>
                {isSignUp
                  ? "Already have an account?"
                  : "Don’t you have any account?"}
              </div>
              <div
                className={styles.signUp}
                onClick={isSignUp ? switchToSignIn : switchToSignUp}
              >
                {isSignUp ? "Sign-In" : "Sign-Up"}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <img className={styles.x} src="x0.svg" alt="Close" onClick={close} />
      </div>
    </div>
  ) : null;
}

export default Sign;
