import styles from "./Signin.module.css";

function SignInButton({ onSubmit, label }) {
  const onClick = () => {
    console.log("helo");
  };
  return (
    <button className={styles.signInButton} onClick={onSubmit}>
      {label}
    </button>
  );
}

export default SignInButton;
