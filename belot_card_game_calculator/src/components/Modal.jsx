import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      {/* onClick={onClose} on the overlay allows closing by clicking outside */}
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          &times;
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
