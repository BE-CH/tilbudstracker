import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/index.module.scss';
import TableItem from '../components/tableItem';
import useSWR from 'swr';
import { useEffect, useState } from 'react';

export default function Home() {
  const [items] = useState(null);

  useEffect(() => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = useSWR('http://localhost:3000/api/getoffers', fetcher);

    console.log('DATA;', data);
    console.log('ERROR:', error);
  }, []);

  console.log('ITEMS:', items);

  return (
    <>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.innerBody}>
          <h1>De bedste tilbud</h1>
          <div className={styles.descriptionContainer}>
            <p className={styles.smallDescription}>Her findes du dagens bedste tilbud.</p>
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Find tilbud"></input>
              <button>Søg</button>
            </div>
          </div>

          <div className={styles.itemsContainer}>
            <table>
              <thead>
                <tr>
                  <th>Billede</th>
                  <th>Produkt</th>
                  <th>Mærke</th>
                  <th>Pris</th>
                  <th>Normalpris</th>
                  <th>Besparelse</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <TableItem></TableItem>
                <TableItem></TableItem>
                <TableItem></TableItem>
                <TableItem></TableItem>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
