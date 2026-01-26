'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { fetchNfts } from '@/services/api';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { addToCart } from '@/store/cartSlice';
import { useState } from 'react';
import { motion } from 'motion/react';
import styles from '@/styles/components/homeCards.module.scss';
import { FaEye } from 'react-icons/fa';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { List } from '@/types';

function HomeCards() {
  const dispatch = useDispatch();
  const [rest, setRest] = useState(0);
  const [step, setStep] = useState(1);

  const progress = step / 4;

  const { data, isLoading, error } = useQuery({
    queryKey: ['nfst'],
    queryFn: fetchNfts,
  });

  const cardItems = useSelector((state: RootState) => state.cart.items);

  if (isLoading) return <p>Carregando</p>;
  if (error) return <p>Error</p>;

  const mostragem = data.products.slice(rest, rest + 8);
  const isList = rest + 8 >= data?.products.length;

  return (
    <section className={styles.containerCards}>
      <div className={styles.listCard}>
        {mostragem.map((item: List) => {
          const isContain = cardItems.some((i: List) => i.id === item.id);
          return (
            <Card key={item.id} item={item} variant={'default'}>
              <Link
                className={styles.detail}
                aria-label={`Ver detalhes do produto ${item.name}`}
                href={`client/${item.id}`}
              >
                <FaEye />
              </Link>

              <Button
                aria-label="Adicionar ao carrinho"
                onClick={() => {
                  if (!isContain) {
                    dispatch(addToCart(item));
                  }
                }}
              >
                {!isContain ? 'Comprar' : 'Adicionado ao carrinho'}
              </Button>
            </Card>
          );
        })}
      </div>
      <div className={styles.containerButton}>
        <div className={styles.containerBar}>
          <motion.div style={{ scaleX: progress }}></motion.div>
        </div>
        <Button
          aria-label="Carregar itens"
          onClick={() => {
            setRest(isList ? 0 : rest + 8);
            setStep((prev) => (prev % 4) + 1);
          }}
        >
          {isList ? 'Você já viu tudo' : 'Carregar mais'}
        </Button>
      </div>
    </section>
  );
}
export default HomeCards;
