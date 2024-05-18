import styles from "./SignInButton.module.css";

function SignInButton({ onSubmit }) {
  const onClick = () => {
    console.log("helo");
  };
  return (
    <button className={styles.signInButton} onClick={onSubmit}>
      Sign-in
    </button>
  );
}

export default SignInButton;
