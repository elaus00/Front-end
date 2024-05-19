import styles from "./Signin.module.css";

function SignInButton({ onSubmit }) {
  const onClick = () => {
    console.log("helo");
  };
  return (
    <button className={styles.signInButton} onClick={onSubmit}>
      Sign In
    </button>
  );
}

export default SignInButton;
