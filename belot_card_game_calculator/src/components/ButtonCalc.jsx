import styles from "./Buttons.module.css";

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
