import { useState } from "react";
import Button from "./Button.jsx";
import styles from "./ScoreBoard.module.css";

export default function ScoreBoard() {
  const [history, setHistory] = useState([]);

  const teamScores = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const teamA = Number(data.teamA);
    const teamB = Number(data.teamB);

    setHistory((prev) => [
      ...prev,
      {
        teamA,
        teamB,
      },
    ]);

    console.log(history);

    e.target.reset();
  };

  const resetHandler = () => {
    console.log("test");
    setHistory([]);
  };

  // derived totals (no extra state!)
  const totalA = history.reduce((sum, round) => sum + round.teamA, 0);
  const totalB = history.reduce((sum, round) => sum + round.teamB, 0);

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
            {totalA < 151 && totalB < 151 ? (
              <Button>Calc</Button>
            ) : (
              <>
                <h2>Game ended!</h2>
                {totalA > totalB ? <h2>Team A won!</h2> : <h2>Team B won!</h2>}
                <Button onClick={resetHandler}>Start new game?</Button>
              </>
            )}
          </div>
        </form>
      </div>
      {history.length > 0 ? (
        <>
          <div className={styles.line}></div>
          <div className={styles.resultTitles}>
            <h2>Team A</h2>
            <h2>Team B</h2>
          </div>
          <div>
            {history.map((round, index) => (
              <div className={styles.results} key={index}>
                <h2>Round: {index + 1}</h2>
                <h2 className={styles.teamA}>{round.teamA}</h2>
                <h2 className={styles.teamB}>{round.teamB}</h2>
              </div>
            ))}
          </div>
          <div className={styles.line}></div>
          <div className={styles.totals}>
            <h2>Total: {totalA}</h2>
            <h2>Total: {totalB}</h2>
          </div>
        </>
      ) : (
        <p></p>
      )}
    </section>
  );
}
