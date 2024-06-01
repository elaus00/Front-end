import styles from "./Feedback.module.css"; // CSS 모듈 불러오기
import RestaurantForm from "./RestaurantForm";

function Feedback({ id, closeModal }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.review}>
            <RestaurantForm />
          </div>
        </div>
        <button onClick={closeModal} className={styles.closeButton}>
          Close
        </button>
      </div>
    </>
  );
}

export default Feedback;