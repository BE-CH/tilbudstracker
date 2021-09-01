import styles from '../styles/Header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <div className={styles.logo}>
          <p>
            <Link href="/">TILBUDSTRACKER</Link>
          </p>
        </div>
        <div className={styles.logoItems}>
          <ul>
            <li>
              <Link href="/myfavorites">Mine favoritter</Link>
            </li>
            <li>
              <Link href="/">Forside</Link>
            </li>
            <li>
              <Link href="/requestfeature">Foreslå en funktion</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
