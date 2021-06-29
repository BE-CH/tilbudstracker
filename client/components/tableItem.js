import styles from '../styles/tableItem.module.scss';

export default function TableItem({ itemObject }) {
  return (
    <tr className={styles.singleItem}>
      <td data-label="Billede" className={styles.imageTD}>
        <div className={styles.image}>
          <img src={`${itemObject.imageurl}`}></img>
        </div>
      </td>
      <td data-label="Produkt" className={styles.productTD}>
        <p>
          {itemObject.name} ({itemObject.underline})
        </p>
      </td>
      <td data-label="Mærke" className={styles.brandTD}>
        <p>{itemObject.store}</p>
      </td>
      <td data-label="Pris" className={styles.priceTD}>
        <p>
          <span className={styles.green}>{itemObject.pricing.price} DKK</span>
          <i className={styles.pricePrUnit}> ({itemObject.pricing.price_per_unit})</i>
        </p>
      </td>
      <td data-label="Normalpris" className={styles.normalPriceTD}>
        <p>
          <span className={styles.red}>{itemObject.pricing.normal_price} DKK</span>
        </p>
      </td>
      <td data-label="Besparelse" className={styles.savingsTD}>
        <p>
          <span className={styles.green}>
            {(itemObject.pricing.normal_price - itemObject.pricing.price).toFixed(2)} DKK{' '}
            <i>({itemObject.pricing.procentage_change.toFixed(2)}%)</i>
          </span>
        </p>
      </td>
      <td data-label="Links" className={styles.linkTD}>
        {itemObject.store === 'rema1000' && (
          <div>
            <a href={itemObject.url} target="_blank">
              Rema 1000
            </a>
          </div>
        )}
        {itemObject.store === 'COOP' && (
          <div>
            <a href={itemObject.url} target="_blank">
              COOP
            </a>
          </div>
        )}
      </td>
    </tr>
  );
}
