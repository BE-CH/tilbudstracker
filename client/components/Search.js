import styles from '../styles/Search.module.scss';
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  // on change functionality here

  return (
    <div className={styles.searchContainer}>
      <input type="text" onChange={onChange} placeholder="Find tilbud"></input>
      <button>Søg</button>
    </div>
  );
}

function onChange(e) {
  const value = e.target.value;
  const lastLetter = value[value.length - 1];
  if (lastLetter !== ' ' && lastLetter !== '.' && lastLetter !== '-' && lastLetter !== ',') {
    alert(`'${value}'`);
  }
}
