import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerFooter}>
        <p>
          Made by Bech Solutions @{' '}
          <a target="_blank" href="http://bech.solutions">
            http://bech.solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
