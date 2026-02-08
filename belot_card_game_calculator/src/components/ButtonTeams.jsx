import styles from "./Buttons.module.css";

export default function ButtonTeams({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.buttonTeams}>
      {children}
    </button>
  );
}
