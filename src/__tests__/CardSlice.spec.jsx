import cartReducer, {
  descrease,
  increase,
  addToCart,
  remove,
} from '@/store/cartSlice'; // teste unitário

describe('testes da lógica', () => {
  let state = {
    items: [{ id: 1, name: 'teste', qtd: 2 }],
  };
  beforeEach(() => {
    state = {
      items: [{ id: 1, name: 'teste', qtd: 2 }],
    };
  });
  it('diminuindo um item', () => {
    const newState = cartReducer(state, descrease(1));
    expect(newState.items[0].qtd).toBe(1);
  });
  it('aumentando um item', () => {
    const newState = cartReducer(state, increase(1));
    expect(newState.items[0].qtd).toBe(3);
  });
  it('excluindo um item', () => {
    const newState = cartReducer(state, remove(1));
    expect(newState.items.length).toBe(0);
  });
  it('adicionando um item', () => {
    const initialState = {
      items: [],
    };
    const item = { id: 4, name: 'teste', qtd: 8 };
    const newState = cartReducer(initialState, addToCart(item));
    expect(newState.items.length).toBe(1);
  });
});
