import { nanoid, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Food } from '../../components/MenuList';

type CartState = {
  items: Food[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Food>) => {
      state.items.push({
        ...action.payload,
        uniqueId: nanoid(),
      });
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.uniqueId !== action.payload
      );
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },

    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, open, close, clear } = cartSlice.actions;
export default cartSlice.reducer;
