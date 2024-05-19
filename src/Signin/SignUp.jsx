import React, { useState } from "react";
import SignInInputField from "./SignInInputField.jsx";
import SignInButton from "./SignInButton.jsx";
import { useAuth } from "../AuthContext.jsx";
import styles from "./Signin.module.css";

// function SignUp({ switchToSignIn, close }) {
//   const { signUp } = useAuth();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let tempErrors = {};
//     tempErrors.email = email ? "" : "email을 입력해주세요.";
//     tempErrors.password =
//       password.length >= 6 ? "" : "비밀번호는 6자 이상이어야 합니다.";
//     tempErrors.confirmPassword =
//       password === confirmPassword ? "" : "비밀번호가 다릅니다.";
//     setErrors(tempErrors);
//     return Object.values(tempErrors).every((x) => x === "");
//   };

//   const handleNameChange = (event) => setName(event.target.value);
//   const handleIdChange = (event) => setEmail(event.target.value);
//   const handlePasswordChange = (event) => setPassword(event.target.value);
//   const handleConfirmPasswordChange = (event) =>
//     setConfirmPassword(event.target.value);

//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (validate()) {
//       console.log("Submitted:", { email, password });
//       signUp();
//     } else {
//       console.error("Validation failed.");
//       console.log(errors.email);
//     }
//   };

//   return (
//     // <div className={styles.SignInArea}>
//     <form className={styles.frame33} onSubmit={onSubmit}>
//       <SignInInputField label="Name" value={name} onChange={handleNameChange} />
//       <SignInInputField
//         label="email"
//         type="email"
//         value={email}
//         onChange={handleIdChange}
//         errorMessage={errors.email}
//       />
//       <SignInInputField
//         label="Password"
//         type="password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <SignInInputField
//         label="Confirm Password"
//         type="password"
//         value={confirmPassword}
//         onChange={handleConfirmPasswordChange}
//       />
//       <SignInButton onSubmit={onSubmit} />
//     </form>
//     // </div>
//   );
// }

export default SignUp;

function SignUp({ switchToSignIn, close }) {
  const { signUp } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateField = (key, value) => {
    let tempErrors = { ...errors };
    if (key === "name") {
      tempErrors.name = value ? "" : "name을 입력해주세요.";
    } else if (key === "email") {
      tempErrors.email = value ? "" : "email을 입력해주세요.";
    } else if (key === "password") {
      tempErrors.password =
        value.length >= 6 ? "" : "비밀번호는 6자 이상이어야 합니다.";
    } else if (key === "confirmPassword") {
      tempErrors.confirmPassword =
        password === value ? "" : "비밀번호가 다릅니다.";
    }

    setErrors(tempErrors);
  };

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

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "name을 입력해주세요.";
    tempErrors.email = email ? "" : "email을 입력해주세요.";
    tempErrors.password =
      password.length >= 6 ? "" : "비밀번호는 6자 이상이어야 합니다.";
    tempErrors.confirmPassword =
      password === confirmPassword ? "" : "비밀번호가 다릅니다.";

    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("Submitted:", { email, password });
      signUp();
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
        label="email"
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
      <SignInButton />
    </form>
  );
}
