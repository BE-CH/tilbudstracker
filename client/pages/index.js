import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/index.module.scss';
import Link from 'next/link';
import ResultsTable from '../components/ResultsTable';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Search from '../components/Search';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const router = useRouter();
  let currentPage = parseInt(router.query.page);
  let amountPrPage = parseInt(router.query.amountprpage);

  if (!currentPage || currentPage <= 0) {
    currentPage = 0;
  }

  if (!amountPrPage || amountPrPage <= 0) {
    amountPrPage = 20;
  }

  const { data, error } = useSWR(
    `http://localhost:3000/api/getoffers?page=${currentPage}&amountprpage=${amountPrPage}`,
    fetcher
  );

  return (
    <>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.innerBody}>
          <h1>De bedste tilbud</h1>
          <p className={styles.smallDescription}>Her findes du dagens bedste tilbud.</p>
          <div className={styles.descriptionContainer}>
            <div className={styles.pageContainer}>
              <div>
                <Link href={`/?page=${currentPage - 1}&amountprpage=${amountPrPage}`}>&lt; Forrige side </Link>
              </div>
              <div>Nuværende side: {currentPage}</div>
              <div>
                <Link href={`/?page=${currentPage + 1}&amountprpage=${amountPrPage}`}>Næste side &gt;</Link>
              </div>
            </div>
            <Search></Search>
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
