import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  carts: [],
};

// Fetch all products
export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get('/api/products');
    return res.data;
  }
);

const ProductSlice = createSlice({
  name: "products/allproducts",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const cartItem = state.products.find((item) => item.id === action.payload);
      if (cartItem) {
        state.carts = [...state.carts, cartItem];
      }
    },
    RemoveCartItem: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { AddToCart, RemoveCartItem } = ProductSlice.actions;
export default ProductSlice.reducer;
