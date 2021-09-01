import router from 'next/router';
import styles from '../styles/Sorting.module.scss';

export default function Sorting({ pageObject }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <select name="sorting" onChange={(e) => onChange(e, pageObject)} id="sorting" className={styles.select}>
            <option value="procentage_change">Størst bestparelse</option>
            <option value="cheapest">Billigst</option>
            <option value="expensivest">Dyrest</option>
          </select>
        </div>
        <div>
          <select
            name="sortingStore"
            onChange={(e) => onStoreChange(e, pageObject)}
            id="sortingStore"
            className={styles.select}
          >
            <option value="all">Alle</option>
            <option value="rema1000">Rema 1000</option>
            <option value="coop">COOP</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function onChange(e, pageObject) {
  pageObject.sorting = e.target.value;
  router.push(`/?${serialize(pageObject)}`);
}

function onStoreChange(e, pageObject) {
  pageObject.store = e.target.value;
  router.push(`/?${serialize(pageObject)}`);
}

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
}
