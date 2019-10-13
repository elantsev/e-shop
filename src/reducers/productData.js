import { HANDLE_DETAIL, ADD_TO_CART, OPEN_MODAL } from "../actions/productData";
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

    default:
      return state;
  }
};
