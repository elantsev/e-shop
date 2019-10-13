import {
  HANDLE_DETAIL,
  ADD_TO_CART,
  OPEN_MODAL,
  CLOSE_MODAL,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM,
  ADD_TOTALS,
  CLEAR_CART
} from "../actions/productData";
import { storeProducts as products, detailProduct } from "../data";

const initialState = {
  products,
  detailProduct,
  cart: [],
  modalOpen: false,
  modalProduct: detailProduct,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0
};

export const productData = (state = initialState, action) => {
  let currentProduct;
  switch (action.type) {
    case HANDLE_DETAIL:
      currentProduct = state.products.find(
        product => product.id === action.payload.id
      );
      return {
        ...state,
        detailProduct: currentProduct
      };

    case ADD_TO_CART:
      currentProduct = state.products.find(
        product => product.id === action.payload.id
      );
      currentProduct.inCart = true;
      currentProduct.count = currentProduct.count += 1;
      return {
        ...state,
        products: [...state.products],
        cart: [...state.cart, currentProduct]
      };

    case OPEN_MODAL:
      currentProduct = state.products.find(
        product => product.id === action.payload.id
      );
      return {
        ...state,
        modalProduct: currentProduct,
        modalOpen: true
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      };

    case INCREMENT_ITEM:
      currentProduct = state.products.find(
        product => product.id === action.payload.id
      );
      currentProduct.count += 1;
      return {
        ...state,
        cart: [...state.cart]
      };

    case DECREMENT_ITEM:
      currentProduct = state.products.find(
        product => product.id === action.payload.id
      );
      if (currentProduct.count >= 1) currentProduct.count -= 1;
      return {
        ...state,
        cart: [...state.cart]
      };

    case REMOVE_ITEM:
      currentProduct = state.products.find(
        product => product.id === action.payload.id
      );
      currentProduct.inCart = false;
      currentProduct.count = 0;
      return {
        ...state,
        cart: [
          ...state.cart.filter(product => product.id !== action.payload.id)
        ]
      };

    case ADD_TOTALS:
      let cartSubTotal = state.cart.reduce(
        (acc, product) => acc + product.price * product.count,
        0
      );
      cartSubTotal = +cartSubTotal.toFixed(2);
      const cartTax = +(cartSubTotal * 0.1).toFixed(2);
      const cartTotal = +(cartSubTotal + cartTax).toFixed(2);
      return {
        ...state,
        cartSubTotal,
        cartTax,
        cartTotal
      };

    case CLEAR_CART:
      state.cart.forEach(product => {
        product.inCart = false;
        product.count = 0;
      });
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};
