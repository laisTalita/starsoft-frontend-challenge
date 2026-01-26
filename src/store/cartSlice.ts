import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type itemCart = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  qtd: number;
};
interface CartState {
  items: itemCart[];
}
const initialState: CartState = {
  items: [],
};
const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<itemCart>) => {
      const isExiste = state.items.some(
        (item) => item.id === action.payload.id,
      );

      if (isExiste) {
        console.log('já existe');
        return;
      }
      state.items.push({ ...action.payload, qtd: 1 });
    },
    remove: (state, action) => {
      const isExiste = state.items.find((i) => i.id === action.payload);
      if (isExiste) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    increase: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.qtd < 10) {
        item.qtd++;
        return;
      }
    },
    descrease: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (!item) return;
      if (item?.qtd === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
        return;
      }
      if (item && item.qtd > 1) {
        item.qtd--;
        return;
      }
    },
    removeAll: (state) => {
      state.items.length = 0;
    },
  },
});
export const {
  addToCart, // ok
  remove, //ok
  increase, //ok
  descrease, //ok
  removeAll, //ok
} = cartSlice.actions;

export default cartSlice.reducer;
