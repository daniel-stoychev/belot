import styles from "./Buttons.module.css";

export default function ButtonTeams({ children }) {
  return <button className={styles.buttonTeams}>{children}</button>;
}
