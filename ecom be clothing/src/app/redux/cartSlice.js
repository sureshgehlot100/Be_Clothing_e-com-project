import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // Update quantity if item already exists
        existingItem.quantity += 1;
        state.total += action.payload.price * existingItem.quantity;
      } else {
        // Add new item to cart
        state.items.push({ ...action.payload, quantity: 1 });
        state.total += action.payload.price;
      }
    },
    removeItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.total -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    updateCartQuantity(state, action) {
      const { itemId, newQuantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.total -= item.price * item.quantity;
        item.quantity = newQuantity;
        state.total += item.price * newQuantity;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, updateCartQuantity } = cartSlice.actions;
