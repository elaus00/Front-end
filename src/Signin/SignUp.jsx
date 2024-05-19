import React, { useState } from "react";
import SignInInputField from "./SignInInputField.jsx";
import SignInButton from "./SignInButton.jsx";
import { useAuth } from "../AuthContext.jsx";
import styles from "./Signin.module.css";

function SignUp({ switchToSignIn, close }) {
  const { signUp } = useAuth();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.id = id ? "" : "ID를 입력해주세요.";
    tempErrors.password =
      password.length >= 6 ? "" : "비밀번호는 6자 이상이어야 합니다.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleIdChange = (event) => setId(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Submitted:", { id, password });
      signUp();
    } else {
      console.error("Validation failed.");
    }
  };

  return (
    <div className={styles.signIn}>
      <form className={styles.frame33} onSubmit={onSubmit}>
        <SignInInputField label="ID" value={id} onChange={handleIdChange} />
        <SignInInputField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <SignInButton onSubmit={onSubmit} />
      </form>
      <div className={styles.socialLoginText}>Social Login</div>
      <div className={styles.frame32}>
        <div className={styles.signUpText}>Already have an account?</div>
        <div className={styles.signUp} onClick={switchToSignIn}>
          Sign-In
        </div>
      </div>
    </div>
  );
}

export default SignUp;
