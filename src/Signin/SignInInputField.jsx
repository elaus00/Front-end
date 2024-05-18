import { useState } from "react";
import styles from "./Signin.module.css";

function SignInInputField({ label, value, onChange, type = "text" }) {
  return (
    <div className={styles.signInTextBox}>
      <div className={styles.frame31}>
        <div className={styles.rectangle181}></div>
        <input
          className={styles.placeholder}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={label} // placeholder도 prop으로부터 받은 label을 사용합니다.
        />
      </div>
      <div className={styles.nameLabel}>{label}</div>
    </div>
  );
}
export default SignInInputField;
