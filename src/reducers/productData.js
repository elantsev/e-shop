import { HANDLE_DETAIL } from "../actions/handleDetail";
import { storeProducts as products, detailProduct } from "../data";
import { ADD_TO_CART } from "../actions/addToCart";

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
      console.log(state, action);
      currentProduct = state.products.find(
        product => product.id === action.payload.id
      );
      return {
        ...state,
        detailProduct: currentProduct
      };

    case ADD_TO_CART:
      console.log(state, action);
      currentProduct = state.products.find(
        product => product.id === action.payload.id
      );
      currentProduct.inCart = true;
      currentProduct.count = currentProduct.count += 1;
      return {
        ...state,
        cart: [...state.cart, currentProduct]
      };

    default:
      return state;
  }
};
