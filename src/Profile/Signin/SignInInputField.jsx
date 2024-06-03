import styles from "./Signin.module.css";

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
        }`}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={errorMessage ? `⚠ ${errorMessage}` : label} // placeholder도 prop으로부터 받은 label을 사용합니다.
        // aria-describedby={error ? "error-msg" : undefined}
      />
      <div className={styles.nameLabel}>{label}</div>
    </div>
  );
}
export default SignInInputField;
