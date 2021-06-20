import styles from '../styles/PageNavigation.module.scss';
import Link from 'next/link';

export default function PageNavigation({ pageObject }) {
  const nextPageObject = { ...pageObject };
  const previousPageObject = { ...pageObject };
  nextPageObject.page++;
  previousPageObject.page--;

  if (pageObject.page > 0) {
    return (
      <div className={styles.pageContainer}>
        <div>
          <Link href={`/?${serialize(previousPageObject)}`}>&lt; Forrige side </Link>
        </div>
        <div>Nuværende side: {pageObject.page}</div>
        <div>
          <Link href={`/?${serialize(nextPageObject)}`}>Næste side &gt;</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.pageContainer}>
        <div>Nuværende side: {pageObject.page}</div>
        <div>
          <Link href={`/?${serialize(nextPageObject)}`}>Næste side &gt;</Link>
        </div>
      </div>
    );
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
