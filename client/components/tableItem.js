import styles from '../styles/tableItem.module.scss';
import Image from 'next/image';

export default function TableItem({ itemObject }) {
  return (
    <div className={styles.container}>
      <a rel="noopener" href={itemObject.url} target="_blank">
        <div className={styles.innerContainer}>
          <div className={styles.storeImageContainer}>
            <div className={styles.storeImage}>
              <Image
                src={`/images/${itemObject.store.toLowerCase()}_logo.png`}
                objectFit="contain"
                layout="fill"
                alt={itemObject.store.toLowerCase()}
              ></Image>
            </div>
          </div>

          <div className={styles.image}>
            <img
              alt={`${itemObject.name} - ${itemObject.pricing.price} DKK`}
              width="220"
              height="122.5"
              src={itemObject.imageurl}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.title}>{itemObject.name}</p>
            <p className={styles.description}>{itemObject.underline}</p>
            <p className={styles.oldPrice}>
              {itemObject.justAvisvare ? `‎` : `${itemObject.pricing.normal_price} DKK`}
            </p>
            <p className={styles.currentPrice}>{itemObject.pricing.price} DKK</p>
            <p className={styles.saveProcentage}>
              ({itemObject.justAvisvare ? `Avisvare` : `${itemObject.pricing.procentage_change.toFixed(2)}%`})
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
