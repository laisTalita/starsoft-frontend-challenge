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
          {variant === 'default' && <h1>{name}</h1>}
          {variant === 'modal' && (
            <div className={styles.modalContainer}>
              <h1>{name}</h1>
              <p> Item {id} </p>
            </div>
          )}
          {variant === 'card' && <h1>Item {id}</h1>}
          {variant === 'summary' && <h1>{name}</h1>}
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
          {variant === 'summary' && <p>qtd - {qtd}</p>}

          {variant === 'modal' && <hr />}

          <div className={styles.componentChildren}>{children}</div>
        </div>
      </section>
    </article>
  );
}
export default Card;
