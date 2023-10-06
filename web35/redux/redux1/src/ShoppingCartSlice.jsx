import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  voucher: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem,
    removeItem,
    updateItem,
    addVoucher,
    clearItem,
  },
});

export const { addItem, removeItem, updateItem, addVoucher, clearItem } =
  cartSlice.action;
