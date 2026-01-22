import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
              <b>Home</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? styles.active : ''}>
              <b>Experience</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>
              <b>Projects</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>
              <b>Contact</b>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
