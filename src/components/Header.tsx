'use client';

import { RootState } from '@/store/store';
import { useState } from 'react';
import Cart from './Cart';
import Link from 'next/link';
import Button from './Button';
import styles from '@/styles/components/header.module.scss';
import Image from 'next/image';
import { useSelector } from 'react-redux';

function Header() {
  const value = useSelector((state: RootState) => state.cart.items);

  const [cart, setCart] = useState(false);

  return (
    <header className={styles.header}>
      <nav aria-label="Navegação principal">
        <ul>
          <li>
            <Link href={'/'} aria-label="Voltar para a Home">
              <Image
                src="/images/logo.svg"
                alt={'logo'}
                width={24}
                height={24}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </li>
        </ul>
        <Button
          className={styles.button}
          aria-label="Ir para o carrinho"
          onClick={() => setCart((prev) => !prev)}
        >
          <Image
            src="/images/bag.svg"
            alt={'Carrinho de compras'}
            width={24}
            height={24}
            style={{ objectFit: 'contain' }}
          />
          <span>{value.length}</span>
        </Button>
        {cart && <Cart setCart={setCart} />}
      </nav>
    </header>
  );
}
export default Header;
