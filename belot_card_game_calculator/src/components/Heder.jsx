import { Link, NavLink } from "react-router";
import logoImage from "../assets/belot.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logoImage">
          <img src={logoImage} alt="Belot Image" />
        </div>
        <ul>
          <li>
            <NavLink to="/">Score Board</NavLink>
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
