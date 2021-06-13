import Image from 'next/image';
import styles from '../styles/Item.module.scss';

export default function Item() {
  return (
    <div className={styles.item}>
      <Image className={styles.image} src="/images/milk.jpg" alt="test" width="100" height="200"></Image>
      <p className={styles.title}>Skummet Mælk</p>
      <p className={styles.brand}>Arla</p>
    </div>
  );
}
