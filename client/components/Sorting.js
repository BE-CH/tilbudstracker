import router from 'next/router';
import styles from '../styles/Sorting.module.scss';

export default function Sorting({ pageObject }) {
  return (
    <div>
      <p className={styles.title}>Sorting: </p>
      <select name="sorting" onChange={(e) => onChange(e, pageObject)} id="sorting" className={styles.select}>
        <option value="procentage_change">Størst bestparelse</option>
        <option value="cheapest">Billigst</option>
        <option value="expensivest">Dyrest</option>
      </select>
    </div>
  );
}

function onChange(e, pageObject) {
  pageObject.sorting = e.target.value;
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
