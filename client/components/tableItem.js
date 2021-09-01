import styles from '../styles/tableItem.module.scss';
import Image from 'next/image';

export default function TableItem({ itemObject }) {
  return (
    <div className={styles.container}>
      <a href={itemObject.url} target="_blank">
        <div className={styles.innerContainer}>
          <div className={styles.storeImageContainer}>
            <div className={styles.storeImage}>
              <Image
                src={itemObject.store === 'rema1000' ? '/images/Rema_1000_logo.png' : '/images/coop_logo.png'}
                objectFit="contain"
                layout="fill"
              ></Image>
            </div>
          </div>

          <div className={styles.image}>
            <Image src={itemObject.imageurl} objectFit="contain" layout="fill"></Image>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.title}>{itemObject.name}</p>
            <p className={styles.description}>{itemObject.underline}</p>
            <p className={styles.oldPrice}>{itemObject.pricing.normal_price} DKK</p>
            <p className={styles.currentPrice}>{itemObject.pricing.price} DKK</p>
            <p className={styles.saveProcentage}>({itemObject.pricing.procentage_change.toFixed(2)}%)</p>
          </div>
        </div>
      </a>
    </div>
  );
}
