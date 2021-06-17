import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/index.module.scss';
import ResultsTable from '../components/ResultsTable';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error } = useSWR('http://localhost:3000/api/getoffers', fetcher);

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
            {data ? <ResultsTable items={data.items} /> : <p className={styles.loadingText}>Loading...</p>}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
