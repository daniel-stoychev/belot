import styles from "./Buttons.module.css";

export default function Button({ children, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
