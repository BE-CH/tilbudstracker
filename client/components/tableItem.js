import styles from '../styles/tableItem.module.scss';
import Image from 'next/image';

export default function TableItem({ itemObject }) {
  return (
    <tr className={styles.singleItem}>
      <td className={styles.imageTD}>
        <div className={styles.image}>
          <Image
            src={`https://cphapp.rema1000.dk/api/v1${itemObject.imageurl}`}
            objectFit="contain"
            layout="fill"
          ></Image>
        </div>
      </td>
      <td className={styles.productTD}>
        <p>
          {itemObject.name} ({itemObject.underline})
        </p>
      </td>
      <td className={styles.brandTD}>
        <p>{itemObject.store}</p>
      </td>
      <td className={styles.priceTD}>
        <p>
          <span className={styles.green}>{itemObject.pricing.price} DKK</span>
          <i> ({itemObject.pricing.price_per_unit})</i>
        </p>
      </td>
      <td className={styles.normalPriceTD}>
        <p>
          <span className={styles.red}>{itemObject.pricing.normal_price} DKK</span>
        </p>
      </td>
      <td className={styles.savingsTD}>
        <p>
          <span className={styles.green}>
            {(itemObject.pricing.normal_price - itemObject.pricing.price).toFixed(2)} DKK{' '}
            <i>({itemObject.pricing.procentage_change.toFixed(2)}%)</i>
          </span>
        </p>
      </td>
      <td className={styles.linkTD}>
        <div>
          <a href={`https://shop.rema1000.dk/varer/${itemObject.itemID}`} target="_blank">
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
