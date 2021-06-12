import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <div className={styles.logo}>
          <p>TilbudsTracker</p>
        </div>
        <div className={styles.logoItems}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
