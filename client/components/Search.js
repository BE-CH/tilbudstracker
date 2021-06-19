import styles from '../styles/Search.module.scss';
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  // on change functionality here

  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Find tilbud"></input>
      <button>Søg</button>
    </div>
  );
}
