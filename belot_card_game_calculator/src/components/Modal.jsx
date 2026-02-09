import ButtonTeams from "./ButtonTeams.jsx";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const updateNamesHandler = (e) => {
    e.preventDefault();
    console.log("UpdateNames");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    localStorage.setItem("newTeamA", `${data.teamA}`);
    localStorage.setItem("newTeamB", `${data.teamB}`);
    onClose();
  };
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      {/* onClick={onClose} on the overlay allows closing by clicking outside */}
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          &times;
        </button>
        <div className={styles.content}>
          <form onSubmit={updateNamesHandler}>
            <h2 className={styles.teamTitle}>Team A</h2>
            <input
              type="text"
              name="teamA"
              placeholder="New name"
              className={styles.input}
            />

            {/* Team B */}
            <h2 className={styles.teamTitle}>Team B</h2>

            <input
              type="text"
              name="teamB"
              placeholder="New name"
              className={styles.input}
            />
            <ButtonTeams onSubmit={updateNamesHandler}>
              Update team names!
            </ButtonTeams>
          </form>
        </div>
      </div>
    </div>
  );
}
