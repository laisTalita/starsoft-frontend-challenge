'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { descrease, increase, remove } from '@/store/cartSlice';
import { useState } from 'react';
import Card from './Card';
import Button from './Button';
import Moldal from './Moldal';
import { SetCartType } from '@/types';
import styles from '@/styles/components/cart.module.scss';
import Portal from './Portal';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Image from 'next/image';
import { GoPlus } from 'react-icons/go';
import { LuMinus } from 'react-icons/lu';

function Cart({ setCart }: SetCartType) {
  const value = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const total = value.reduce((acc, item) => acc + item.price * item.qtd, 0);
  const [resumo, setResumo] = useState(false);

  return (
    <Portal>
      <div className={styles.modal} onClick={() => setCart(false)}></div>
      <section className={styles.modalCart}>
        <div className={styles.compras}>
          <Button onClick={() => setCart(false)}>
            <IoIosArrowRoundBack className={styles.icon} />
          </Button>
          <h2>Mochila de compras</h2>
        </div>
        <div>
          <section className={styles.listCardsItems}>
            {value.map((item) => (
              <Card key={item.id} item={item} variant={'card'}>
                <div className={styles.cartControler}>
                  <div className={styles.controler}>
                    <Button
                      aria-label="Remover items"
                      onClick={() => dispatch(descrease(item.id))}
                    >
                      <LuMinus />
                    </Button>
                    <span>{item.qtd}</span>
                    <Button
                      aria-label="Adicionar mais items"
                      onClick={() => dispatch(increase(item.id))}
                    >
                      <GoPlus />
                    </Button>
                  </div>
                  <Button
                    className={styles.removeItem}
                    aria-label="Excluir item"
                    onClick={() => {
                      dispatch(remove(item.id));
                    }}
                  >
                    <Image
                      src="/images/checkout.svg"
                      alt={'remove item'}
                      width={24}
                      height={24}
                      style={{ objectFit: 'contain' }}
                    />
                  </Button>
                </div>
              </Card>
            ))}
          </section>
          <section className={styles.finish}>
            <div className={styles.containerTotal}>
              <h3>Total</h3>
              <div className={styles.finishContainer}>
                <Image
                  src="/images/ellipse.svg"
                  alt={'ellipse'}
                  width={24}
                  height={24}
                  style={{ objectFit: 'contain' }}
                />
                <div>
                  <p>{total}</p> <span>eth</span>
                </div>
              </div>
            </div>

            <Button
              className={styles.butFish}
              aria-label="Finalizar a compra"
              onClick={() => setResumo(total > 0 ? true : false)}
            >
              {resumo ? 'Compra Finalizada!' : 'Finalizar Compra'}
            </Button>
          </section>
        </div>
        {resumo && (
          <Moldal setResumo={setResumo} setCart={setCart} total={total} />
        )}
      </section>
    </Portal>
  );
}
export default Cart;
