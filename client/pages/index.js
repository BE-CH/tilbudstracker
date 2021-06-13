import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/index.module.scss';
import Item from '../components/Item';

export default function Home() {
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
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
