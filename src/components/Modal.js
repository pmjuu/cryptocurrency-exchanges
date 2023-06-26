import styles from "../styles/Modal.module.css";

export default function Modal({ children, closeModal }) {
  const handleClosingClick = (e) => {
    if (e.target === e.currentTarget) {
      document.body.style.cursor = "default";

      return closeModal();
    }
  };

  return (
    <div
      className={styles.modalOuter}
      onClick={handleClosingClick}
      data-testid="modal-outer"
    >
      <div className={styles.modalBox}>
        <div className={styles.contents}>{children}</div>
        <button className={styles.closeButton} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}
