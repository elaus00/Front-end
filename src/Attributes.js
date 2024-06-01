import styles from "./Pureplate/Pureplate.module.css";
import Button from "./Button.js";
import { useAuth } from "./AuthContext.jsx";

function Attributes() {
  const { dietToggle, setDietToggle } = useAuth();
  const dietType = Object.keys(dietToggle);

  return (
    <div className={styles.attributes}>
      <Button attribute={dietType[0]} />
      <Button attribute={dietType[1]} />
      <Button attribute={dietType[2]} />
      <Button attribute={dietType[3]} />
    </div>
  );
}

export default Attributes;
