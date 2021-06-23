import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/index.module.scss';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ResultsTable from '../components/ResultsTable';
import useSWR from 'swr';
import Search from '../components/Search';
import PageNavigation from '../components/PageNavigation';
import Sorting from '../components/Sorting';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const router = useRouter();
  const { data, error } = useSWR(`http://localhost:3000/api/getoffers`, fetcher);

  const [pageObject, setPageObject] = useState({
    page: 0,
    amountprpage: 20,
    sorting: 'procentage_change',
  });

  const page = parseInt(router.query.page);
  const amountprpage = parseInt(router.query.amountprpage);
  const sorting = router.query.sorting;
  const search = router.query.search;

  if (page && page > 0) {
    setPageObject({
      page: page,
      amountprpage: pageObject.amountprpage,
      sorting: pageObject.sorting,
    });
  }

  if (amountprpage && amountprpage > 0) {
    setPageObject({
      page: pageObject.page,
      amountprpage: amountprpage,
      sorting: pageObject.sorting,
    });
  }

  if (sorting && sorting !== 'undefined' && sorting !== 'null' && sorting.length < 3) {
    setPageObject({
      page: pageObject.page,
      amountprpage: pageObject.amountprpage,
      sorting: sorting,
    });
  }

  if (search && search !== 'null') {
    setPageObject({
      page: pageObject.page,
      amountprpage: pageObject.amountprpage,
      sorting: pageObject.sorting,
      search: search,
    });
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
            <Sorting pageObject={pageObject}></Sorting>
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
