import React, { useState } from "react";
import SignInInputField from "./SignInInputField.jsx";
import SignInButton from "./SignInButton.jsx";
import { useAuth } from "../../../context/AuthContext.jsx";
import styles from "./Signin.module.css";

function SignIn() {
  const { login } = useAuth(); // Get the login function from the authentication context
  const [email, setEmail] = useState(""); // State to store the email input
  const [password, setPassword] = useState(""); // State to store the password input
  const [errors, setErrors] = useState({}); // State to store validation errors

  // Function to validate the input fields

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = email ? "" : "Please enter your email address";
    tempErrors.password =
      password.length >= 6 ? "" : "Password must be 6+ characters";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  // Handler for email input change
  const handleIdChange = (event) => setEmail(event.target.value);
  // Handler for password input change
  const handlePasswordChange = (event) => setPassword(event.target.value);

  // Handler for form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      try {
        await login(email, password);
      } catch (error) {
        setErrors({
          ...errors,
          form: "Login failed. Please check your email or password.",
        });
      }
    } else {
      console.error("Validation failed.");
    }
  };

  return (
    <div className={styles.signInArea}>
      <form className={styles.frame33} onSubmit={onSubmit}>
        <SignInInputField
          label="Email"
          value={email}
          onChange={handleIdChange}
          errorMessage={errors.email}
        />
        <SignInInputField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          errorMessage={errors.password}
        />
        {errors.form && <div className={styles.error}>{errors.form}</div>}
        <SignInButton onSubmit={onSubmit} label="Sign In" />
      </form>
    </div>
  );
}
export default SignIn;
