import styles from "./Signin.module.css";

// Functional component for rendering a sign-in input field.
function SignInInputField({
  label,
  value,
  onChange,
  type = "text",
  errorMessage,
}) {
  return (
    <div className={styles.signInTextBox}>
      <input
        className={`${styles.placeholder} ${
          errorMessage ? styles.errorInput : ""
        }`} // Apply error styling if there's an error.
        value={value}
        onChange={onChange} // Calls the onChange function passed as prop when the input changes.
        type={type} // Sets the input type (text, password, etc.).
        placeholder={errorMessage ? `⚠ ${errorMessage}` : label} // Shows an error message or label as the placeholder.
      />
      <div className={styles.nameLabel}>{label}</div>
      {/* Displays the label below the input field. */}
    </div>
  );
}
export default SignInInputField;
