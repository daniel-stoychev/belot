import { Link, NavLink } from "react-router";
import logoImage from "../assets/belot.png";
import styles from "./Header.module.css";
import "../styles/style.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoImage}>
          <img src={logoImage} alt="Belot Image" />
        </div>
        <ul className={styles.ul}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles["selected-link"] : ""
              }
              to="/"
            >
              Score Board
            </NavLink>
          </li>
          <li>
            <a target="_blank" href="https://belot.bg/belot/rules/">
              Rules
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
