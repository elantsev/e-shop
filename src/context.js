import React, { useState, useEffect } from "react";
import { storeProducts as products, detailProduct } from "./data";

const ProductContext = React.createContext();

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

const ProductProvider = ({ children }) => {
  const [state, setState] = useState(JSON.parse(JSON.stringify(initialState)));
  useEffect(() => addTotals(), [state.cart]);

  const openModal = id => {
    const currentProduct = state.products.find(product => product.id === id);
    setState(state => ({
      ...state,
      modalProduct: currentProduct,
      modalOpen: true
    }));
  };

  const closeModal = () => {
    setState(state => ({
      ...state,
      modalOpen: false
    }));
  };

  // const handleDetail = id => {
  //   const currentProduct = state.products.find(product => product.id === id);
  //   setState(state => ({
  //     ...state,
  //     detailProduct: currentProduct
  //   }));
  // };

  const addToCart = id => {
    let currentProduct = state.products.find(product => product.id === id);
    currentProduct.inCart = true;
    currentProduct.count = currentProduct.count += 1;
    // currentProduct.total = currentProduct.count * currentProduct.price;
    setState(state => ({
      ...state,
      cart: [...state.cart, currentProduct]
    }));
  };

  const increment = id => {
    let currentProduct = state.products.find(product => product.id === id);
    currentProduct.count += 1;
    setState(state => ({
      ...state,
      cart: [...state.cart]
    }));
  };

  const decrement = id => {
    let currentProduct = state.products.find(product => product.id === id);
    currentProduct.count -= 1;
    setState(state => ({
      ...state,
      cart: [...state.cart]
    }));
  };

  const removeItem = id => {
    let currentProduct = state.products.find(product => product.id === id);
    currentProduct.inCart = false;
    currentProduct.count = 0;
    setState(state => ({
      ...state,
      cart: [...state.cart.filter(product => product.id !== id)]
    }));
  };

  const clearCart = () => {
    state.cart.forEach(product => {
      product.inCart = false;
      product.count = 0;
    });
    setState(state => ({
      ...state,
      cart: []
    }));
  };

  const addTotals = () => {
    let cartSubTotal = state.cart.reduce(
      (acc, product) => acc + product.price * product.count,
      0
    );
    cartSubTotal = +cartSubTotal.toFixed(2);
    const cartTax = +(cartSubTotal * 0.1).toFixed(2);
    const cartTotal = +(cartSubTotal + cartTax).toFixed(2);
    setState(state => ({
      ...state,
      cartSubTotal,
      cartTax,
      cartTotal
    }));
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        // handleDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
