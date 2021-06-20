import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/index.module.scss';
import { useRouter } from 'next/router';
import ResultsTable from '../components/ResultsTable';
import useSWR from 'swr';
import Search from '../components/Search';
import PageNavigation from '../components/PageNavigation';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const router = useRouter();
  const { data, error } = useSWR(`http://localhost:3000/api/getoffers`, fetcher);

  const pageObject = {
    page: parseInt(router.query.page),
    amountprpage: parseInt(router.query.amountprpage),
    sorting: router.query.sorting,
  };

  if (!pageObject.page || pageObject.page <= 0 || pageObject.page === 'undefined') {
    pageObject.page = 0;
  }

  if (!pageObject.amountprpage || pageObject.amountprpage <= 0 || pageObject.amountprpage === 'undefined') {
    pageObject.amountprpage = 20;
  }

  if (!pageObject.sorting || pageObject.sorting === 'undefined') {
    pageObject.sorting = 'procentage_change';
  }

  return (
    <>
      <Header></Header>
      <div className={styles.body}>
        <div className={styles.innerBody}>
          <h1>De bedste tilbud</h1>
          <p className={styles.smallDescription}>Her findes du dagens bedste tilbud.</p>
          <div className={styles.descriptionContainer}>
            <PageNavigation pageObject={pageObject}></PageNavigation>
            <Search></Search>
          </div>

          <div className={styles.itemsContainer}>
            {data ? (
              <ResultsTable items={data.items} pageObject={pageObject} />
            ) : (
              <p className={styles.loadingText}>Loading...</p>
            )}
          </div>
          <div className={styles.pageContainerBottom}>
            <PageNavigation pageObject={pageObject}></PageNavigation>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
