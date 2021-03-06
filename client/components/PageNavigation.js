import styles from '../styles/PageNavigation.module.scss';
import Link from 'next/link';

export default function PageNavigation({ pageObject }) {
  const nextPageObject = { ...pageObject };
  const previousPageObject = { ...pageObject };
  nextPageObject.page++;
  previousPageObject.page--;
  if (pageObject.page <= 0) {
    previousPageObject.page = 0;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.pageButton}>
          <Link href={`/?${serialize(previousPageObject)}`}>&lt; Forrige side </Link>
        </div>
        <div>Side: {pageObject.page}</div>
        <div className={styles.pageButton}>
          <Link href={`/?${serialize(nextPageObject)}`}>Næste side &gt;</Link>
        </div>
      </div>
    </div>
  );
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
}
