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
import { motion } from 'motion/react';

function Cart({ setCart }: SetCartType) {
  const value = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const total = value.reduce((acc, item) => acc + item.price * item.qtd, 0);
  const [isSummary, setIsSummary] = useState(false);

  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.02, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={styles.modal}
          onClick={() => setCart(false)}
        ></motion.div>
        <section className={styles.modalCart}>
          <div className={styles.shoppingCart}>
            <Button aria-label="Fechar carrinho" onClick={() => setCart(false)}>
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
              <div className={styles.totalContainer}>
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
                onClick={() => setIsSummary(total > 0 ? true : false)}
              >
                {isSummary ? 'Compra Finalizada!' : 'Finalizar Compra'}
              </Button>
            </section>
          </div>
          {isSummary && (
            <Moldal
              setIsSummary={setIsSummary}
              setCart={setCart}
              total={total}
            />
          )}
        </section>
      </motion.div>
    </Portal>
  );
}
export default Cart;
