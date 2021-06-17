import styles from '../styles/tableItem.module.scss';
import Image from 'next/image';

export default function TableItem({ itemObject }) {
  return (
    <tr className={styles.singleItem}>
      <td className={styles.imageTD}>
        <div className={styles.image}>
          <Image src="/images/milk.jpg" layout="responsive" width="1" height="3"></Image>
        </div>
      </td>
      <td className={styles.productTD}>
        <p>Skummetmælk, 0.5% ØKO., 1L</p>
      </td>
      <td className={styles.brandTD}>
        <p>Arla</p>
      </td>
      <td className={styles.priceTD}>
        <p>
          <span className={styles.green}>8,95 DKK</span>
          <i> (8,95 pr. Ltr)</i>
        </p>
      </td>
      <td className={styles.normalPriceTD}>
        <p>
          <span className={styles.red}>9,95 DKK</span> <i>(9,95 pr. Ltr)</i>
        </p>
      </td>
      <td className={styles.savingsTD}>
        <p>
          <span className={styles.green}>
            1,00 DKK <i>(10%)</i>
          </span>
        </p>
      </td>
      <td className={styles.linkTD}>
        <div>
          <a href="https://shop.rema1000.dk/varer/410812" target="_blank">
            Rema 1000
          </a>
        </div>
        <div>
          <a href="https://hjem.foetex.dk/produkt/skummetmaelk-01-fedt/93002100001-ea" target="_blank">
            Føtex
          </a>
        </div>
      </td>
    </tr>
  );
}
