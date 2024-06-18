import styles from "./SignInButton.module.css";

function SignInButton({ onSubmit, label }) {
  return (
    <button className={styles.signInButton} onClick={onSubmit}>
      {label}
    </button>
  );
}

export default SignInButton;
