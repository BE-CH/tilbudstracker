import styles from '../styles/Search.module.scss';
import Image from 'next/image';
import router from 'next/router';

export default function Search({ pageObject }) {
  return (
    <div className={styles.searchContainer}>
      <input type="text" onChange={(e) => onChange(e, pageObject)} placeholder="Søg efter varer"></input>
    </div>
  );
}

function onChange(e, pageObject) {
  const value = e.target.value;
  const lastLetter = value[value.length - 1];
  if (lastLetter !== ' ' && lastLetter !== '.' && lastLetter !== '-' && lastLetter !== ',') {
    pageObject.search = value;
    router.push(`/?${serialize(pageObject)}`);
  }
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
}
