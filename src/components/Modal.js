import styles from "./Modal.module.css";

export default function Modal({ children, closeModal }) {
  return (
    <div className={styles.modalOuter}>
      <div className={styles.modalBox}>
        <div className={styles.contents}>{children}</div>
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}
