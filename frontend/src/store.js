import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
     veg: [
  { id: 1, name: "pav bhaji", price: 200, image: "/pav bhaji.jpg" },
  { id: 2, name: "vada pav", price: 100, image: "/vada pav.jpg" },
  { id: 3, name: "paneer butter masala", price: 300, image: "/paneer butter masala.jpg" },
  { id: 4, name: "veg biryani", price: 400, image: "/veg biryani.jpg" },
  { id: 5, name: "veg noodles", price: 250, image: "/veg noodles.jpg" },
  { id: 6, name: "veg manchurian", price: 350, image: "/veg manchurian.jpg" }
],

nonveg: [
  { id: 1, name: "butter chicken", price: 500, image: "/butter chicken.jpg" },
  { id: 2, name: "seekh kabab", price: 300, image: "/seekh kabab.jpg" },
  { id: 3, name: "chicken biryani", price: 500, image: "/chicken biryani.jpg" },
  { id: 4, name: "mutton biryani", price: 600, image: "/mutton biryani.jpg" },
  { id: 5, name: "egg noodles", price: 400, image: "/egg noodles.jpg" },
  { id: 6, name: "chicken 65", price: 450, image: "/chicken 65.jpg" }
]
  },
  reducers: {}
});

const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      const status=state.find(item=>item.name===action.payload.name);
      if(status){
        status.quantity+=1;
      }
      else{
        state.push({...action.payload, quantity: 1});
      }
    },
  
    increment: (state, action) => {
      const item = state.find(
        product => product.name === action.payload.name
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const item = state.find(
        product => product.name === action.payload.name
      );

      if (item) {
        item.quantity -= 1;
      }
      if(item.quantity === 0){
        return state.filter(
          product => product.name !== action.payload.name
        );
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(
        item => item.name !== action.payload.name
      );
    },

    clearCart: () => {
      return [];
    }
  }
});

export const { addToCart, increment, decrement, removeFromCart, clearCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store;
