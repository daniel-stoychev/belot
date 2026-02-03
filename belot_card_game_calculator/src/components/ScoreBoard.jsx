import { useState } from "react";
import Button from "./Button.jsx";
import styles from "./ScoreBoard.module.css";

export default function ScoreBoard() {
  const [scoreAteam, setScoresA] = useState(0);
  const [scoreBteam, setScoresB] = useState(0);
  const teamScores = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const scores = Object.values(data).map(Number);
    setScoresA((prev) => prev + scores[0]);
    setScoresB((prev) => prev + scores[1]);
  };
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Score Board</h1>

      <div className={styles.board}>
        <form onSubmit={teamScores}>
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
        </form>
      </div>
      {scoreAteam > 0 || scoreBteam > 0 ? (
        <>
          <div className={styles.line}></div>
          <div className={styles.initialScores}>
            <h2 className={styles.teamTitle}>
              Team A<p>{scoreAteam}</p>
            </h2>

            <h2 className={styles.teamTitle}>
              Team B<p>{scoreBteam}</p>
            </h2>
          </div>
        </>
      ) : (
        <p></p>
      )}
    </section>
  );
}
