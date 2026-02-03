import Button from "./Button.jsx";
import styles from "./ScoreBoard.module.css";

export default function ScoreBoard() {
  const teamScores = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Score Board</h1>

      <div className={styles.board}>
        <div className={styles.column}>
          {/* Team A */}
          <h2 className={styles.teamTitle}>Team A</h2>

          <input
            type="number"
            name="teamA"
            placeholder="Enter score"
            className={styles.input}
          />

          {/* Team B */}
          <h2 className={styles.teamTitle}>Team B</h2>

          <input
            type="number"
            name="teamB"
            placeholder="Enter score"
            className={styles.input}
          />

          <Button>Calc</Button>
        </div>
      </div>
    </section>
  );
}
