import { HANDLE_DETAIL } from "../actions/handleDetail";
import { storeProducts as products, detailProduct } from "../data";

export const initialState = {
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
  switch (action.type) {
    case HANDLE_DETAIL:
      console.log(state, action);
      const currentProduct = state.products.find(
        product => product.id === action.payload.id
      );
      console.log(state, action);

      return {
        ...state,
        detailProduct: currentProduct
      };

    default:
      return state;
  }
};
