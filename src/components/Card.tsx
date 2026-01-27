import { CardProps } from '@/types';
import styles from '@/styles/components/card.module.scss';
import Image from 'next/image';

function Card({ item, children, variant = 'default' }: CardProps) {
  const { image, name, description, price, id, qtd } = item;

  return (
    <article className={`${styles[variant]} ${styles.cart}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name || 'image - nft'}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <section>
        <div className={styles.description}>
          {variant === 'default' && <h2>{name}</h2>}
          {variant === 'modal' && (
            <div className={styles.modalContainer}>
              <h2>{name}</h2>
              <p> Item {id} </p>
            </div>
          )}
          {variant === 'card' && <h2>Item {id}</h2>}
          {variant === 'summary' && <h2>{name}</h2>}
          <p className={styles.desc} aria-label="descrição do produto">
            {description}
          </p>
        </div>
        <div className={styles.containerChildren}>
          <div className={styles.containerPrice}>
            <Image
              src="/images/ellipse.svg"
              alt={'ellipse'}
              width={24}
              height={24}
              style={{ objectFit: 'contain' }}
            />
            <span>{Number(price).toFixed(2)} eth</span>
          </div>
          {variant === 'summary' && <p>qtd: {qtd}</p>}
          {variant === 'modal' && <hr />}

          <footer className={styles.componentChildren}>{children}</footer>
        </div>
      </section>
    </article>
  );
}
export default Card;
