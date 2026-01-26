'use Client';

import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { removeAll } from '@/store/cartSlice';
import { List, SetCartType } from '@/types';
import Card from './Card';
import Button from './Button';
import styles from '@/styles/components/moldal.module.scss';
import Portal from './Portal';
import { motion } from 'motion/react';

type MoldalProps = SetCartType & {
  setIsSummary: React.Dispatch<React.SetStateAction<boolean>>;
  total: number;
};

function Moldal({ setIsSummary, setCart, total }: MoldalProps) {
  const dispatch = useDispatch();
  const cardItems = useSelector((state: RootState) => state.cart.items);

  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      >
        <div className={styles.summaryModal}></div>
        <section className={styles.summary}>
          <h3>Compra Finalizada!</h3>
          <section className={styles.containerSummary}>
            {cardItems.length > 0 &&
              cardItems.map((items: List) => (
                <Card key={items.id} item={items} variant="summary"></Card>
              ))}
          </section>
          <h4>total: {total}</h4>
          <Button
            aria-label="Fechar Resumo"
            className={styles.closeSummary}
            onClick={() => {
              dispatch(removeAll());
              setIsSummary(false);
              setCart(false);
            }}
          >
            Fechar Resumo
          </Button>
        </section>
      </motion.div>
    </Portal>
  );
}
export default Moldal;
