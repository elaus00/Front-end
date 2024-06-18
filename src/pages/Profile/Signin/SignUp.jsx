import React, { useState } from "react";
import SignInInputField from "./SignInInputField.jsx";
import SignInButton from "./SignInButton.jsx";
import { useAuth } from "../../AuthContext.jsx";
import styles from "./Signin.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../custom-swal.css";

function SignUp({ switchToSignIn, close }) {
  // State variables for form fields and errors

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { URL } = useAuth();

  // Function to validate individual fields

  const validateField = (key, value) => {
    let tempErrors = { ...errors };
    if (key === "name") {
      tempErrors.name = value ? "" : "Enter name.";
    } else if (key === "email") {
      tempErrors.email = value ? "" : "Enter email.";
    } else if (key === "password") {
      tempErrors.password =
        value.length >= 6 ? "" : "Password must be 6+ chars.";
    } else if (key === "confirmPassword") {
      tempErrors.confirmPassword =
        password === value ? "" : "Passwords do not match.";
    }

    setErrors(tempErrors);
  };

  // Handlers for input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
    validateField("name", event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateField("email", event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validateField("password", event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    validateField("confirmPassword", event.target.value);
  };

  // Function to validate the entire form
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "Enter name.";
    tempErrors.email = email ? "" : "Enter email.";
    tempErrors.password =
      password.length >= 6 ? "" : "Password must be 6+ chars.";
    tempErrors.confirmPassword =
      password === confirmPassword ? "" : "Passwords do not match.";

    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };
  // Function to show success alert

  const showSuccessAlert = (username) => {
    Swal.fire({
      title: `Welcome to Pureplate, ${username}!`, // Alert title
      text: "Please, sign in!", // Alert contents
      icon: "success", // Alert type (success, error, warning, info, question)
    });
  };

  // Function to show error alert
  const showErrorAlert = () => {
    Swal.fire({
      title: `This email is already registered.`, // Alert title
      text: " Please choose another email.", // Alert contents
      icon: "error", // Alert type (success, error, warning, info, question)
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const data = {
        nickname: name,
        username: email,
        password: password,
        // confirmPassword might not be handled on the server
      };

      const SIGNUP_URL = `${URL}/api/account/register/`;
      try {
        const response = await axios.post(SIGNUP_URL, data);
        console.log(response.data);
        close();
        navigate("/");
        showSuccessAlert(response.data.nickname, "success");
      } catch (error) {
        const firstKey = Object.keys(error.response.data)[0];
        console.log(firstKey);
        if (firstKey === "username") {
          showErrorAlert();
        }
        console.error(
          "Error during sign up:",
          error.response ? error.response.data : error
        );
        // Error handling logic, e.g., show error message to user
      }
    } else {
      console.error("Validation failed.");
    }
  };

  return (
    <form className={styles.frame33} onSubmit={onSubmit}>
      <SignInInputField
        label="Name"
        value={name}
        onChange={handleNameChange}
        errorMessage={errors.name}
      />
      <SignInInputField
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        errorMessage={errors.email}
      />
      <SignInInputField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        errorMessage={errors.password}
      />
      <SignInInputField
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        errorMessage={errors.confirmPassword}
      />
      <SignInButton onSubmit={onSubmit} label="Submit" />
    </form>
  );
}

export default SignUp;
