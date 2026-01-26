'use Client';

import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { removeAll } from '@/store/cartSlice';
import { List, SetCartType } from '@/types';
import Card from './Card';
import Button from './Button';
import styles from '@/styles/components/moldal.module.scss';
import Portal from './Portal';

type MoldalProps = SetCartType & {
  setResumo: React.Dispatch<React.SetStateAction<boolean>>;
  total: number;
};

function Moldal({ setResumo, setCart, total }: MoldalProps) {
  const dispatch = useDispatch();
  const cardItems = useSelector((state: RootState) => state.cart.items);

  return (
    <Portal>
      <div className={styles.modalResumo}></div>
      <section className={styles.resumo}>
        <h3>Compra Finalizada!</h3>

        <section className={styles.containerResumo}>
          {cardItems.length > 0 &&
            cardItems.map((items: List) => (
              <Card key={items.id} item={items} variant="resumo"></Card>
            ))}
        </section>
        <h4>total: {total}</h4>
        <Button
          aria-label="Fechar Resumo"
          className={styles.fecharResumo}
          onClick={() => {
            dispatch(removeAll());
            setResumo(false);
            setCart(false);
          }}
        >
          Fechar Resumo
        </Button>
      </section>
    </Portal>
  );
}
export default Moldal;
