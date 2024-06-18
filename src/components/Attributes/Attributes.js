import styles from "../Pureplate/Pureplate.module.css";
import Button from "./Button.js";
import { useAuth } from "../AuthContext.jsx";

function Attributes() {
  // Get the dietToggle state and setDietToggle function from the useContext
  const { dietToggle, setDietToggle } = useAuth();
  // Get the keys (diet types) from the dietToggle object
  const dietType = Object.keys(dietToggle);

  return (
    // Render the attributes container
    <div className={styles.attributes}>
      <Button attribute={dietType[0]} />
      <Button attribute={dietType[1]} />
      <Button attribute={dietType[2]} />
      <Button attribute={dietType[3]} />
    </div>
  );
}

export default Attributes;
